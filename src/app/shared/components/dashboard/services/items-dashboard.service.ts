import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { MenuDashboard } from '../interfaces/menu.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsDashboardService {

  constructor() { }

  dataMenu: MenuDashboard = 
    {
      title:'Welcome to Hospital App',
      icon: 'home',
      subMenu: [
        {name: 'Account Settings', url: '/pages/account-settings', icon:'home'},
        {name: 'Users Managment', url: '/', icon:'home'},
        {name: 'Drugs', url: '/', icon:'home'},
        {name: 'Doctors', url: '/',icon:'home'},
        {name: 'Medical Appointment', url:'home', icon:'check'},
        {name: 'Promises', url: '/pages/promises', icon:'key'},
        {name: 'RXJS', url: '/pages/rxjs', icon:'star'},
      ]
    };


  getMenu(): Observable<MenuDashboard>{
    return of(this.dataMenu);
  }
}
