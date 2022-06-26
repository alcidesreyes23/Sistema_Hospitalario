import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from '../angular-material/material.module';
import { HomeComponent } from './components/landing-page/home.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    NotFoundComponent,
  ]
})
export class SharedModule { }
