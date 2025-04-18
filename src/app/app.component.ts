import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { KeycloakService } from './core/services/keycloak.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    HttpClientModule,
    
  ],
  template: `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">CampusManager</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/home" routerLinkActive="active">
                <i class="fas fa-home me-1"></i>Accueil
              </a>
            </li>
            
            <!-- Menu protégé par authentification -->
            <ng-container *ngIf="auth.authenticated">
              <!-- Chambres Dropdown -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="chambresDropdown" role="button" 
                  data-bs-toggle="dropdown" aria-expanded="false" style="color: #ffc107; font-weight: bold;">
                  <i class="fas fa-bed me-1"></i>Chambres
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.5rem;">
                    New
                  </span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="chambresDropdown">
                  <li>
                    <a class="dropdown-item" routerLink="/chambre" routerLinkActive="active">
                      <i class="fas fa-list me-1"></i>Liste des Chambres
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" routerLink="/chambres-disponibles" routerLinkActive="active">
                      <i class="fas fa-check-circle me-1" style="color: #28a745;"></i>Chambres Disponibles
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" routerLink="/chambre-map" routerLinkActive="active">
                      <i class="fas fa-map-marker-alt me-1" style="color: #17a2b8;"></i>Carte des Chambres
                    </a>
                  </li>
                </ul>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" routerLink="/reservations" routerLinkActive="active">
                  <i class="fas fa-calendar-check me-1"></i>Réservations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/bloc" routerLinkActive="active">
                  <i class="fas fa-building me-1"></i>Blocs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/universite" routerLinkActive="active">
                  <i class="fas fa-university me-1"></i>Universités
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/foyer" routerLinkActive="active">
                  <i class="fas fa-home me-1"></i>Foyers
                </a>
              </li>
            </ng-container>
          </ul>

          <!-- Section Auth -->
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" *ngIf="!auth.authenticated">
              <a class="nav-link btn btn-outline-success" (click)="handleLogin()">
                <i class="fas fa-sign-in-alt me-1"></i> Connexion
              </a>
            </li>
            
            <li class="nav-item dropdown" *ngIf="auth.authenticated">
              <a class="nav-link dropdown-toggle" href="#" id="authDropdown" role="button" 
                data-bs-toggle="dropdown" aria-expanded="false">
                <img [src]="auth.userProfile?.attributes?.picture?.[0] || 'assets/default-user.png'" 
                    class="rounded-circle me-1" width="30" height="30" alt="Profile">
                {{ auth.userProfile?.username || 'Mon compte' }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="authDropdown">
                <li>
                  <a class="dropdown-item" (click)="auth.accountManagement()">
                    <i class="fas fa-user-cog me-1"></i> Profil
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item text-danger" (click)="handleLogout()">
                    <i class="fas fa-sign-out-alt me-1"></i> Déconnexion
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- Main Content -->
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .dropdown-menu {
      min-width: 200px;
    }
    .navbar {
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1020;
    }
    .nav-link.btn {
      padding: 0.375rem 0.75rem;
    }
    .container {
      padding-top: 20px;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(public auth: KeycloakService) {}

  async ngOnInit() {
    try {
      await this.auth.init();
    } catch (error) {
      console.error('Authentication initialization failed', error);
    }
  }

  async handleLogin() {
    try {
      await this.auth.login();
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  async handleLogout() {
    try {
      await this.auth.logout();
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
}