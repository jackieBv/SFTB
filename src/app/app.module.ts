import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
 

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
