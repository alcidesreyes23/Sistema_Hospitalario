import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../angular-material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    DashboardComponent
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
