import { Status } from "../enums/status.enum";
import { TipoContato } from "../enums/tipoContato.enum";

export interface User {
    id?: number;
    nome?: string;
    sobrenome?: string;
    telefone?: string;
    email?: string;
    perfilAcesso?: string[];
    idioma?: string;
    tipoContato?: TipoContato;
    status?: Status;
    dataCriacao?: Date;
    ultimoAcesso?: Date;
}

export type Users = Array<User>;