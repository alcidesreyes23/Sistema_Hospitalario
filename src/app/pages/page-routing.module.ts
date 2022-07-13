import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<<<<<<< main
import { PagesRoutingModule } from './page-routing-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { StadisticComponent } from './stadistic/stadistic.component';
import { MaterialModule } from '../angular-material/material.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    ChartsComponent,
    StadisticComponent,
    AccountSettingsComponent, 
    PromisesComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    PagesRoutingModule,
    MaterialModule
    
  ],
=======
import { PageRoutingRoutingModule } from './page-routing-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageRoutingRoutingModule
  ]
>>>>>>> testing
})
export class PageRoutingModule { }
