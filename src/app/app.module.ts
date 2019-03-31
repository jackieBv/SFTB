import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
 

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { HomeComponent } from './shared/home/home.component';
=======
import { LogginComponent } from './loggin/loggin.component';
import { HeaderComponent } from './shared/header/header.component';
>>>>>>> 7428140bcd210aae153847b0856fab4c450ebea1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent
=======
    LogginComponent,
    HeaderComponent,
    
>>>>>>> 7428140bcd210aae153847b0856fab4c450ebea1
  ],
  imports: [
    BrowserModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
