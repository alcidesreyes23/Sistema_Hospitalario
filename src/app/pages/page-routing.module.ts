import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './page-routing-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { StadisticComponent } from './stadistic/stadistic.component';
import { MaterialModule } from '../angular-material/material.module';


@NgModule({
  declarations: [
    ChartsComponent,
    StadisticComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    PagesRoutingModule,
    MaterialModule
    
  ],
})
export class PageRoutingModule { }
