import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './users.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersFormComponent } from './users-form/users-form.component';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgbTypeaheadModule,
    NgbModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [
    MessageService
  ]
  
})
export class UsersModule { }
