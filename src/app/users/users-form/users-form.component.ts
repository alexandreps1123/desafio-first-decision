import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Status } from 'src/app/enums/status.enum';
import { TipoContato } from 'src/app/enums/tipoContato.enum';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  idiomas = [
    "Alemão DE",
    "Árabe AR",
    "Chinês (Mandarim) ZH",
    "Coreano KO",
    "Dinamarquês DA",
    "Espanhol ES",
    "Francês FR",
    "Grego EL",
    "Hebraico HE",
    "Hindi HI",
    "Holandês NL",
    "Inglês EN",
    "Italiano IT",
    "Japonês JA",
    "Norueguês NO",
    "Polonês PL",
    "Português PT",
    "Russo RU",
    "Sueco SV",
    "Turco TR"
  ]

  // formulário
  novoUsuarioForm = new FormGroup(
    {
      'nome': new FormControl('', Validators.required ),
      'sobrenome': new FormControl('', Validators.required ),
      'telefone': new FormControl(''),
      'email': new FormControl('', [ Validators.required, Validators.email ]),
      'perfilAcesso': new FormArray([]),
      'idioma': new FormControl('', Validators.required ),
      'tipoContato': new FormControl(TipoContato.TODOS),
      'status': new FormControl(Status.PENDENTE),
      'dataCriacao': new FormControl(new Date()),
      'ultimoAcesso': new FormControl(null),
    }
  );
  
  activeModal = inject(NgbActiveModal);
  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.novoUsuarioForm);
    if(this.isValidForm()) {
      // mensagem de sucesso
      // this.messageService.add({ severity: 'success', summary: 'Cadastro de Usuário!', 
      //   detail: 'Operação realizada com sucesso!', key: 'br', life: 5000 });
  
      //   this.activeModal.close('Close click');
      console.log("valid")

    }
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 1 ? [] : this.idiomas.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);
 

  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${reason}`;
			},
		);
	}

  closeAll() {
    this.modalService.dismissAll();
  }

  private isValidForm() {
    this.novoUsuarioForm.markAllAsTouched();
    return this.novoUsuarioForm.valid;
  }
}

