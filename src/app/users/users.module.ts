import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersComponent } from './users.component';
import { ChipsModule } from 'primeng/chips';


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
    ReactiveFormsModule,
    ToastModule,
    ChipsModule
  ],
  providers: [
    MessageService
  ]
  
})
export class UsersModule { }
