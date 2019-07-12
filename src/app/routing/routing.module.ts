import { AuthComponent } from '../auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AuthGuardGuard } from '../helpers/auth-guard.guard';
import { CompetencesComponent } from '../admin/dashboard/competences/competences.component';
import { AddCompetencesComponent } from '../admin/dashboard/competences/add-competences/add-competences.component';
import { AddExperienceComponent } from '../admin/dashboard/experiences/add-experience/add-experience.component';
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
  },
  {
    path: 'SkillsList',
    component: CompetencesComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'addSkill',
    component: AddCompetencesComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'addExperience',
    component: AddExperienceComponent,
    canActivate: [AuthGuardGuard]
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
