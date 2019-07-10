import { AuthComponent } from '../auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AuthGuardGuard } from '../helpers/auth-guard.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard]
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
