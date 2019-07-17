import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './auth/forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { BasicAuthInterceptor } from './helpers/basicAuth.interceptor';
import { ErrorInterceptor } from './helpers/error.Interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { appRoutingModule } from './routing/routing.module';
import { LanguagesComponent } from './admin/languages/languages.component';
import { SkillsCvComponent } from './home/skills-cv/skills-cv.component';
import { ExperiencesCvComponent } from './home/experiences-cv/experiences-cv.component';
import { TrainingCvComponent } from './home/training-cv/training-cv.component';
import { LaguagesCvComponent } from './home/laguages-cv/laguages-cv.component';
import { ExperiencesComponent } from './admin/experiences/experiences.component';
import { FormationsComponent } from './admin/formations/formations.component';

import {AccordionModule} from 'primeng/accordion';       
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message'
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../app/services/inMemoryData/in-memory-data.service';
import { CompetencesComponent } from './admin/competences/competences.component';
import { NavComponent } from './admin/nav/nav.component';
import { CandidateComponent } from './admin/candidate/candidate.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    ForbiddenComponent,
    HomeComponent,
    LanguagesComponent,
    SkillsCvComponent,
    ExperiencesCvComponent,
    TrainingCvComponent,
    LaguagesCvComponent,
    CompetencesComponent,
    LanguagesComponent,
    ExperiencesComponent,
    FormationsComponent,
    NavComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    TableModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    RatingModule,
    SliderModule,
    ProgressBarModule,
    InputTextareaModule,
     // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend for login
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
