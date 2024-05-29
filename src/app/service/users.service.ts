import { Injectable } from '@angular/core';
import { Status } from '../enums/status.enum';
import { User, Users } from '../models/user.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<Users> {
    return of(this.listaUsuarios);
  }

  getIdiomas(): Observable<string[]>{
    return of(this.idiomas);
  }

  saveUser(user: User): void {
    this.listaUsuarios.push(user);

    return;
  }

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
  ];

  listaUsuarios: Users = [
    {
      nome: "Augusto",
      sobrenome: "Castel",
      email: "augusto@email.com",
      status: Status.ATIVO,
      dataCriacao: new Date(),
      ultimoAcesso: new Date(),
    },
    {
      nome: "Ray",
      sobrenome: "Render",
      email: "ray@email.com",
      status: Status.PENDENTE,
      dataCriacao: new Date(),
      ultimoAcesso: null,
    },
    {
      nome: "Lesley",
      sobrenome: "Carrilo",
      email: "lesley@email.com",
      status: Status.BLOQUEADO,
      dataCriacao: new Date(),
      ultimoAcesso: new Date(),
    }
  ];
}
