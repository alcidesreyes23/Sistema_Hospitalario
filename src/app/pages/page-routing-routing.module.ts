import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { HomeComponent } from './landing-page/home.component';
import { StadisticComponent } from './stadistic/stadistic.component';

const routes: Routes = [
  {
    path:'', 
    component:DashboardComponent,
    children:
    [
      {path:'', component:HomeComponent},
      {path:'stadistic', component:StadisticComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
