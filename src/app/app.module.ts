import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
 

import { AppComponent } from './app.component';

import { MenuComponent } from './shared/menu/menu.component';
import { ReservaComponent } from './reserva/reserva.component';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { HomeComponent } from './shared/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
ReservaComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,

    HeaderComponent,
  ],
  imports: [
    BrowserModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
