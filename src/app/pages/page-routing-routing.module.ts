import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { HomeComponent } from './landing-page/home.component';

const routes: Routes = [
  {
    path:'', 
    component:DashboardComponent,
    children:
    [
      {path:'', component:HomeComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
