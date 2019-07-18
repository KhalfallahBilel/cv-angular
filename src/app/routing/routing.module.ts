import { AuthComponent } from '../auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuardGuard } from '../helpers/auth-guard.guard';
import { LanguagesComponent } from '../admin/languages/languages.component';
import { FormationsComponent } from '../admin/formations/formations.component';
import { CompetencesComponent } from '../admin/competences/competences.component';
import { ExperiencesComponent } from '../admin/experiences/experiences.component';
import { CandidateComponent } from '../admin/candidate/candidate.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'SkillsList',
    component: CompetencesComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'LanguagesList',
    component: LanguagesComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'Trainingslists',
    component: FormationsComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'ExperiencesList',
    component: ExperiencesComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'Candidate',
    component: CandidateComponent,
    canActivate: [AuthGuardGuard]
  }
  
];

export const appRoutingModule = RouterModule.forRoot(routes);
