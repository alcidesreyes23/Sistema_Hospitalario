import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../angular-material/material.module';
import { RouterModule } from '@angular/router';
<<<<<<< main

=======
>>>>>>> testing


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
<<<<<<< main
    DashboardComponent,
=======
    DashboardComponent
>>>>>>> testing
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    DashboardComponent
  ]
})
export class SharedModule { }
