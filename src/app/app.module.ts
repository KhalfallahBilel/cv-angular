import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './auth/forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BasicAuthInterceptor } from './helpers/basicAuth.interceptor';
import { ErrorInterceptor } from './helpers/error.Interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { appRoutingModule } from './routing/routing.module';
import { LanguagesComponent } from './admin/dashboard/languages/languages.component';
import { AddExperienceComponent } from './admin/dashboard/experiences/add-experience/add-experience.component';
import { EditExperienceComponent } from './admin/dashboard/experiences/edit-experience/edit-experience.component';
import { AddCompetencesComponent } from './admin/dashboard/competences/add-competences/add-competences.component';
import { EditCompetencesComponent } from './admin/dashboard/competences/edit-competences/edit-competences.component';
import { AddFormationComponent } from './admin/dashboard/formations/add-formation/add-formation.component';
import { EditFormationComponent } from './admin/dashboard/formations/edit-formation/edit-formation.component';
import { AddLanguageComponent } from './admin/dashboard/languages/add-language/add-language.component';
import { EditLanguageComponent } from './admin/dashboard/languages/edit-language/edit-language.component';
import { SkillsCvComponent } from './home/skills-cv/skills-cv.component';
import { ExperiencesCvComponent } from './home/experiences-cv/experiences-cv.component';
import { TrainingCvComponent } from './home/training-cv/training-cv.component';
import { LaguagesCvComponent } from './home/laguages-cv/laguages-cv.component';
import { CompetencesComponent } from './admin/dashboard/competences/competences.component';
import { ExperiencesComponent } from './admin/dashboard/experiences/experiences.component';
import { FormationsComponent } from './admin/dashboard/formations/formations.component';
import { NavComponent } from './admin/dashboard/nav/nav.component';
import { InputComponent } from './admin/elements/input/input.component';
import { ButtonComponent } from './admin/elements/button/button.component';
import { SelectComponent } from './admin/elements/select/select.component';
import { TextareaComponent } from './admin/elements/textarea/textarea.component';
import { FileComponent } from './admin/elements/file/file.components';
import { DynamicFieldDirective } from './admin/elements/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './admin/elements/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    EditLanguageComponent,
    SkillsCvComponent,
    ExperiencesCvComponent,
    TrainingCvComponent,
    LaguagesCvComponent,
    CompetencesComponent,
    LanguagesComponent,
    ExperiencesComponent,
    FormationsComponent,
    NavComponent,
    InputComponent,
    ButtonComponent ,
    SelectComponent,
    TextareaComponent,
    FileComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend for login
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    TextareaComponent,
    FileComponent
  ]
})
export class AppModule { }
