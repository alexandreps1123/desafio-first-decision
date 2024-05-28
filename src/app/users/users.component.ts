import { Component, OnInit, inject } from '@angular/core';
import { Users } from '../models/user.model';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UsersFormComponent } from './users-form/users-form.component';
// import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // config: PaginationInstance = {
  //   itemsPerPage: 20,
  //   currentPage: 1
  // };

  listaUsuarios: Users = [
    {
      nome: "Ran-na",
      sobrenome: "Ran-na",
      dataCriacao: new Date(),
      ultimoAcesso: new Date(),
    }
  ];

  private modalService = inject(NgbModal);


  constructor(config: NgbModalConfig) {}

  ngOnInit() {


    // telefone?: string;
    // email?: string;
    // perfilAcesso?: string[];
    // idioma?: number;
    // tipoContato?: TipoContato;
    // status?: Status;
    // dataCriacao?: Date;
    // ultimoAcesso?: Date;
  }

  open(): NgbModalRef {
    return this.modalService.open(UsersFormComponent, { size: 'lg' });
  }
}

