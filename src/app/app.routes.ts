import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';

export const routes: Routes = [
  { path: '', redirectTo: 'reservations', pathMatch: 'full' },
  { path: 'reservations', component: ReservationComponent }
];
