import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { CompetencesComponent } from './competences/competences.component';
import { MatSliderModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { LanguesComponent } from './langues/langues.component';
import { DynamicFieldDirective } from './elements/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './elements/dynamic-form/dynamic-form.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './elements/input/input.component';
import { ButtonComponent } from './elements/button/button.component';
import { SelectComponent } from './elements/select/select.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { FileComponent } from './elements/file/file.components';
import { ForbiddenComponent } from './auth/forbidden/forbidden.component';

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
    DynamicFieldDirective,
    DynamicFormComponent, 
    InputComponent,
    ButtonComponent,
    SelectComponent,
    TextareaComponent,
    FileComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    TextareaComponent,
    FileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
