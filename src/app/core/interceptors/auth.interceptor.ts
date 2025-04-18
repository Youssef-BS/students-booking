import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { KeycloakService } from '../services/keycloak.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloak = inject(KeycloakService);
  
  if (keycloak.token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${keycloak.token}`
      }
    });
    return next(authReq);
  }
  
  return next(req);
};