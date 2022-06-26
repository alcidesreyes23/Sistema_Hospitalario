import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  { path:'', redirectTo:'/pages', pathMatch:'full' },
  { 
    path: '', 
    loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule) 
  },
  { path: 'pages', 
    loadChildren: () => import('./pages/page-routing-routing.module').then(m => m.PagesRoutingModule) 
  },
  { path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
