import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './angular-material/material.module';
<<<<<<< main
import { NotFoundComponent } from './shared/components/not-found/not-found.component';;
import { PageRoutingModule } from './pages/page-routing.module';
=======
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

>>>>>>> testing

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< main
    NotFoundComponent,

=======
    NotFoundComponent
    
>>>>>>> testing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    BrowserAnimationsModule,
    PageRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
