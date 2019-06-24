import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../header/header.component';
import { ExperiencesComponent } from '../../experiences/experiences.component';
import { FormationsComponent } from '../../formations/formations.component';
import { LanguesComponent } from '../../langues/langues.component';
import { CompetencesComponent } from '../../competences/competences.component';
import { MatSliderModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthComponent } from '../../auth/auth.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperiencesComponent,
    FormationsComponent,
    LanguesComponent,
    CompetencesComponent,
    AuthComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
