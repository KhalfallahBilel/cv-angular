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
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BasicAuthInterceptor } from './helpers/basicAuth.interceptor';
import { ErrorInterceptor } from './helpers/error.Interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { appRoutingModule } from './routing/routing.module';
import { LanguagesComponent } from './admin/dashboard/languages/languages.component';
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

import {AccordionModule} from 'primeng/accordion';       
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    DashboardComponent,
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
    InputComponent,
    ButtonComponent ,
    SelectComponent,
    TextareaComponent,
    FileComponent,
    DynamicFieldDirective,
    DynamicFormComponent
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
    ButtonModule
    
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
