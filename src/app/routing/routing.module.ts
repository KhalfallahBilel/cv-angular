import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
    path: 'login',
    component: AuthComponent
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RoutingModule]
})
export class RoutingModule { }
