import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-hospital-ud';
  routes =  [
    // { path: 'accounts', component: "AccountsComponent", label: 'Accounts' },
    { path: 'contacts', component: "ContactsComponent", label: 'Contacts' },
    { path: 'activities', component: "ActivitiesComponent", label: 'Activities' }
   ];
}
