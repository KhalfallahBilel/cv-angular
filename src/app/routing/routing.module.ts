import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component';
import { Routes } from '@angular/router';

const routes: Routes = [
{
    path: 'login',
    component: AuthComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }
