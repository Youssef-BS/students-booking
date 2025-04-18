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
    {
      path: 'home',
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
      path: 'reservations',
      loadComponent: () => import('./reservation/reservation.component').then(m => m.ReservationComponent)
    },
    {
      path: 'bloc',
      loadComponent: () => import('./bloc/bloc.component').then(m => m.BlocComponent)
    },
    {
      path: 'update-bloc/:id',
      loadComponent: () => import('./bloc-update/bloc-update.component').then(m => m.BlocUpdateComponent)
    },
    {
      path: 'universite',
      loadComponent: () => import('./universite/universite.component').then(m => m.UniversiteComponent)
    },
    {
      path: 'foyer',
      loadComponent: () => import('./foyer-list/foyer-list.component').then(m => m.FoyerListComponent)
    },
    {
      path: 'chambre',
      loadComponent: () => import('./chambre/chambre.component').then(m => m.ChambreComponent)
    },
    {
      path: 'chambres-disponibles',
      loadComponent: () => import('./chambres-disponibles/chambres-disponibles.component').then(m => m.ChambresDisponiblesComponent)
    },
    {
      path: 'chambre-map',
      loadComponent: () => import('./chambre-maps/chambre-maps.component').then(m => m.ChambreMapsComponent)
    }
  ];
  

