import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { HomeComponent } from './landing-page/home.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { StadisticComponent } from './stadistic/stadistic.component';

const routes: Routes = [
  {
    path:'', 
    component:DashboardComponent,
    children:
    [
      {path:'', component:HomeComponent, data:{ title:'Home' }},
      {path:'stadistic', component:StadisticComponent, data:{ title:'Stadistics' }},
      {path:'account-settings', component:AccountSettingsComponent, data:{ title:'Account Settings' }},
      {path:'promises', component:PromisesComponent, data:{ title:'Promises' }},
      {path:'rxjs', component:RxjsComponent, data:{ title:'RXJS' }},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
