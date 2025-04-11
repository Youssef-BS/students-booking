import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { BlocComponent } from './bloc/bloc.component';
import { BlocUpdateComponent } from './bloc-update/bloc-update.component';
import { UniversiteComponent } from './universite/universite.component';
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'bloc', component: BlocComponent },
  { path: 'update-bloc/:id', component: BlocUpdateComponent },
  { path: 'universite', component: UniversiteComponent },
  { path: 'foyer', component: FoyerListComponent },     

];
