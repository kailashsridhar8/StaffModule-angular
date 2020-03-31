import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ResearchComponent } from './research/research.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneralDetailsComponent } from './profile/general-details/general-details.component';
import { LogbookComponent } from './logbook/logbook.component';
import { MarksComponent } from './marks/marks.component';
import { UniversityresultsComponent } from './universityresults/universityresults.component';
import { NotesComponent } from './notes/notes.component';
import { FormsComponent } from './forms/forms.component';
import { MydetailsComponent } from './mydetails/mydetails.component';

import {MaterialModule} from './ngMaterial/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResearchComponent, routingComponents, ProfileComponent, GeneralDetailsComponent, LogbookComponent, MarksComponent, UniversityresultsComponent, NotesComponent, FormsComponent, MydetailsComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
