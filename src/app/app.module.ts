import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { NetworksComponent } from './components/networks/networks.component';
import { EducationalResourcesComponent } from './components/educational-resources/educational-resources.component';
import { DatabaseResourcesComponent } from './components/database-resources/database-resources.component';
import { SoftwareResourcesComponent } from './components/software-resources/software-resources.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { UpcomingWorkshopsComponent } from './components/upcoming-workshops/upcoming-workshops.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    EducationalResourcesComponent,
    DatabaseResourcesComponent,
    SoftwareResourcesComponent,
    PublicationsComponent,
    UpcomingWorkshopsComponent,
    NetworksComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatMenuModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
