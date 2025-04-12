import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { BlocComponent } from './bloc/bloc.component';
import { BlocUpdateComponent } from './bloc-update/bloc-update.component';
import { UniversiteComponent } from './universite/universite.component';
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { HomeComponent } from './home/home.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ChambresDisponiblesComponent } from './chambres-disponibles/chambres-disponibles.component';
import { ChambreMapsComponent } from './chambre-maps/chambre-maps.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'bloc', component: BlocComponent },
  { path: 'update-bloc/:id', component: BlocUpdateComponent },
  { path: 'universite', component: UniversiteComponent },
  { path: 'foyer', component: FoyerListComponent },
  { path: 'chambre', component: ChambreComponent },
  { path: 'chambres-disponibles', component: ChambresDisponiblesComponent },
  { path: 'chambre-map', component: ChambreMapsComponent },
];
