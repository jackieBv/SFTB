import { Routes, RouterModule } from '@angular/router'; 
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    
    {path:'reservation', component:ReservationComponent},
    {path:'contact', component:ContactComponent}
]; 
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true}) 