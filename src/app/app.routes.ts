import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { BlocComponent } from './bloc/bloc.component';
import { BlocUpdateComponent } from './bloc-update/bloc-update.component';

export const routes: Routes = [
  { path: '', redirectTo: 'reservations', pathMatch: 'full' },
  { path: 'reservations', component: ReservationComponent },
  { path: 'bloc', component: BlocComponent },
  { path: 'update-bloc/:id', component: BlocUpdateComponent }
];
