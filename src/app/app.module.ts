import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { HomeComponent } from './shared/home/home.component';
import { APP_ROUTES } from './app.route';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    ReservationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
