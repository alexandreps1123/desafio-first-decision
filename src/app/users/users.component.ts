import { Component, OnInit, inject } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { Status } from '../enums/status.enum';
import { Users } from '../models/user.model';
import { UsersService } from '../service/users.service';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listaUsuarios: Users = [];

  itemsPerPage: number[] = [10, 20, 50];
  optionFilter: string[] = [Status.ATIVO, Status.BLOQUEADO, Status.PENDENTE];

  config: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1
  };

	filter = new FormControl('');
  filterOption = new FormControl('');
  
  private modalService = inject(NgbModal);

  constructor(config: NgbModalConfig, private service: UsersService) { 
    config.backdrop = 'static';
		config.keyboard = false;

    this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => this.service.searchUserByInputText(text))).subscribe({
        next: value => this.listaUsuarios = value
      });
        
    this.filterOption.valueChanges.pipe(
      startWith(''),
      map((text) => this.service.searchUserByOption(text))).subscribe({
        next: value => this.listaUsuarios = value
      });

  }

  ngOnInit() {
    this.loadUsersList();
  }

  open(): NgbModalRef {
    return this.modalService.open(UsersFormComponent, { size: 'lg' });
  }
  
  getSeverity(status: string ): string {
    if (status === Status.ATIVO) { return "success"; } 
    else if (status === Status.PENDENTE) { return "warning"; }
    else { return "danger"; }
  }

  private loadUsersList() {
    this.service.getUsers().subscribe({
      next: value => {
        this.listaUsuarios = value;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  
}

