import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardsComponent } from './components/standards/standards.component';
import { DatabaseResourcesComponent } from './components/database-resources/database-resources.component';
import { EducationalResourcesComponent } from './components/educational-resources/educational-resources.component';
import { HomeComponent } from './components/home/home.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { SoftwareResourcesComponent } from './components/software-resources/software-resources.component';
import { UpcomingWorkshopsComponent } from './components/upcoming-workshops/upcoming-workshops.component';
import { NetworksComponent } from './components/networks/networks.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'standards', component: StandardsComponent },
  { path: 'networks', component: NetworksComponent },
  { path: 'educational-resources', component: EducationalResourcesComponent },
  { path: 'database-resources', component: DatabaseResourcesComponent },
  { path: 'software-resources', component: SoftwareResourcesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'upcoming-workshops', component: UpcomingWorkshopsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
