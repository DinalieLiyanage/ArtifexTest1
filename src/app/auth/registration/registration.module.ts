import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  }
];


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
