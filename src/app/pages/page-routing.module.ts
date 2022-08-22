import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './page-routing-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';
import { StadisticComponent } from './stadistic/stadistic.component';
import { MaterialModule } from '../angular-material/material.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PhoneNumberMaskDirective } from '../shared/pipes/phone-number-mask.directive';



@NgModule({
  declarations: [
    ChartsComponent,
    StadisticComponent,
    AccountSettingsComponent, 
    PromisesComponent,
    RxjsComponent,
    PhoneNumberMaskDirective
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    PagesRoutingModule,
    MaterialModule
    
  ],
})
export class PageRoutingModule { }
