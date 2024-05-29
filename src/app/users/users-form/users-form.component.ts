import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Status } from 'src/app/enums/status.enum';
import { TipoContato } from 'src/app/enums/tipoContato.enum';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  idiomas: string[] = []

  private modalService = inject(NgbModal);
  activeModal = inject(NgbActiveModal);

  // form
  novoUsuarioForm!: FormGroup;

  constructor(private messageService: MessageService, private service: UsersService) { }

  ngOnInit() {
    this.novoUsuarioForm = new FormGroup(
      {
        'nome': new FormControl('', Validators.required),
        'sobrenome': new FormControl('', Validators.required),
        'telefone': new FormControl(''),
        'email': new FormControl('', [Validators.required, this.emailValidator.bind(this)]),
        'perfilAcesso': new FormControl([], Validators.required),
        'idioma': new FormControl('', Validators.required),
        'tipoContato': new FormControl(TipoContato.TODOS),
        'status': new FormControl(Status.PENDENTE),
        'dataCriacao': new FormControl(new Date()),
        'ultimoAcesso': new FormControl(null),
      }
    );
    
    this.loadIdiomas();
  }

  save() {
    if (this.isValidForm()) {
      // console.log(this.novoUsuarioForm.value);
      this.service.saveUser(this.novoUsuarioForm.value);
      // mensagem de sucesso
      this.messageService.add({
        severity: 'success', summary: 'Cadastro de Usuário!',
        detail: 'Operação realizada com sucesso!', key: 'br', life: 5000
      });
      
      // close modal after save
      this.activeModal.close('Close click');
    }

  }

  // to search in idioma list
  searchIdioma: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 1 ? [] : this.idiomas.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );


  // open modal to user confirm leave action
  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  closeAll() {
    this.modalService.dismissAll();
  }

  isValidField(filedName: string): boolean | undefined{
    return this.novoUsuarioForm.get(filedName)?.touched && this.novoUsuarioForm.get(filedName)?.invalid
  }

  private loadIdiomas() {
    this.service.getIdiomas().subscribe({
      next: value => {
        this.idiomas = value
      },
      error: error => {
        console.log(error)
      }
    });
  }

  private isValidForm() {
    this.novoUsuarioForm.markAllAsTouched();
    return this.novoUsuarioForm.valid;
  }

  // custom validation email
  private emailValidator(email: FormControl): { [s: string]: boolean } | null {
    // https://stackoverflow.com/a/46370978
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    let emailValid = regexp.exec(email.value);
    if (!emailValid) {
      return { 'validEmail': true };
    }

    return null;
  }

}

