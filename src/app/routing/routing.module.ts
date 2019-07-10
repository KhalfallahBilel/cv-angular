import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from '../auth/forbidden/forbidden.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AuthGuardGuard } from '../helpers/auth-guard.guard';
import { CompetencesComponent } from '../home/competences/competences.component';
import { AddCompetencesComponent } from '../admin/dashboard/competences/add-competences/add-competences.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/home', 
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//     path: 'login',
//     component: AuthComponent
//   },
//   {
//     path: 'unauthorized',
//     component: ForbiddenComponent
//   },

//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     // canActivate:[AuthGuardGuard]
//   },
// ]
// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     RouterModule.forRoot(routes)
//   ],
//   exports: []
// })
// export class RoutingModule { }
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },

  {
    path: 'addSkill',
    component: AddCompetencesComponent,
    canActivate: [AuthGuardGuard]
  },
];

export const appRoutingModule = RouterModule.forRoot(routes);
