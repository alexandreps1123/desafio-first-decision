import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './users.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersFormComponent } from './users-form/users-form.component';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgbTypeaheadModule,
    NgbModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
