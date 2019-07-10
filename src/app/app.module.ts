import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CompetencesComponent } from './home/competences/competences.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExperiencesComponent } from './home/experiences/experiences.component';
import { FormationsComponent } from './home/formations/formations.component';
import { LanguesComponent } from './home/langues/langues.component';
import { ForbiddenComponent } from './auth/forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BasicAuthInterceptor } from './helpers/basicAuth.interceptor';
import { ErrorInterceptor } from './helpers/error.Interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { appRoutingModule } from './routing/routing.module';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { LanguagesComponent } from './admin/dashboard/languages/languages.component';
import { AddExperienceComponent } from './admin/dashboard/experiences/add-experience/add-experience.component';
import { EditExperienceComponent } from './admin/dashboard/experiences/edit-experience/edit-experience.component';
import { AddCompetencesComponent } from './admin/dashboard/competences/add-competences/add-competences.component';
import { EditCompetencesComponent } from './admin/dashboard/competences/edit-competences/edit-competences.component';
import { AddFormationComponent } from './admin/dashboard/formations/add-formation/add-formation.component';
import { EditFormationComponent } from './admin/dashboard/formations/edit-formation/edit-formation.component';
import { AddLanguageComponent } from './admin/dashboard/languages/add-language/add-language.component';
import { EditLanguageComponent } from './admin/dashboard/languages/edit-language/edit-language.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperiencesComponent,
    FormationsComponent,
    LanguesComponent,
    CompetencesComponent,
    AuthComponent,
    DashboardComponent,
    ForbiddenComponent,
    HomeComponent,
    LanguagesComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    AddFormationComponent,
    EditFormationComponent,
    AddCompetencesComponent,
    EditCompetencesComponent,
    AddLanguageComponent,
    EditLanguageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    DynamicFormBuilderModule,
    appRoutingModule
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
