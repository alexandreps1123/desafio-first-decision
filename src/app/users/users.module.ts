import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './users.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersFormComponent } from './users-form/users-form.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgbTypeaheadModule,
    NgbModule
  ]
})
export class UsersModule { }
