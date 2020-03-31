import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './research/research.component';
import { ProfileComponent } from './profile/profile.component';
import { LogbookComponent } from './logbook/logbook.component';
import { MarksComponent } from './marks/marks.component';
import { UniversityresultsComponent } from './universityresults/universityresults.component';
import { NotesComponent } from './notes/notes.component';
import { FormsComponent } from './forms/forms.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { HomeComponent } from './home/home.component';
import { GeneralDetailsComponent } from './profile/general-details/general-details.component';


const routes: Routes = [
  
{path: 'home', component:HomeComponent
},
  {path: 'research', component: ResearchComponent
},
 {path: 'profile', component: ProfileComponent
},
{path: 'profile/generaldetails', component: GeneralDetailsComponent
},
{path: 'logbook', component:LogbookComponent
},
{path: 'marks', component:MarksComponent
},

{path: 'universityresults', component:UniversityresultsComponent
},

{path: 'notes', component:NotesComponent
},
{path: 'forms', component:FormsComponent
},
{path: 'mydetails', component:MydetailsComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
 [HomeComponent,ResearchComponent,ProfileComponent,GeneralDetailsComponent,LogbookComponent,MarksComponent,UniversityresultsComponent,NotesComponent,FormsComponent,MydetailsComponent]