import { Component, inject, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


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

  activeModal = inject(NgbActiveModal);
  
  constructor() {}

  ngOnInit() {

  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 1 ? [] : this.idiomas.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);
  
}

