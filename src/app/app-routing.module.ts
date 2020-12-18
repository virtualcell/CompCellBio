import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DatabaseResourcesComponent } from './components/database-resources/database-resources.component';
import { EducationalResourcesComponent } from './components/educational-resources/educational-resources.component';
import { HomeComponent } from './components/home/home.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { SoftwareResourcesComponent } from './components/software-resources/software-resources.component';
import { UpcomingWorkshopsComponent } from './components/upcoming-workshops/upcoming-workshops.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'educational-resources', component: EducationalResourcesComponent },
  { path: 'database-resources', component: DatabaseResourcesComponent },
  { path: 'software-resources', component: SoftwareResourcesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'upcoming-workshops', component: UpcomingWorkshopsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
