import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { ChambreService } from './core/services/chambre.service';
import { BlocService } from './core/services/bloc.service';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { KeycloakService } from './core/services/keycloak.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    KeycloakService
  ]
};