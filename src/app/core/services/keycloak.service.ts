import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({ providedIn: 'root' })
export class KeycloakService {
  private _keycloak: Keycloak;
  private _authenticated = false;
  public userProfile: Keycloak.KeycloakProfile | null = null;
  private _initPromise: Promise<boolean> | null = null;

  async init(): Promise<boolean> {
    // Évite les initialisations multiples
    if (this._initPromise) {
      return this._initPromise;
    }


    this._initPromise = (async () => {
      this._keycloak = new Keycloak({
        url: 'http://localhost:8181',
        realm: 'securitproject',
        clientId: 'apigateway',
      
      });

      try {
       this._authenticated = await this._keycloak.init({
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: `${window.location.origin}/assets/silent-check-sso.html`, // Must match the file location
  pkceMethod: 'S256',
  checkLoginIframe: false
});

        if (this._authenticated) {
          this.userProfile = await this.loadUserProfile();
        }
        return this._authenticated;
      } catch (error) {
        console.error('Keycloak initialization failed:', error);
        this._authenticated = false;
        return false;
      }
    })();

    return this._initPromise;
  }

  private async loadUserProfile(): Promise<Keycloak.KeycloakProfile | null> {
    try {
      return this._authenticated ? await this._keycloak.loadUserProfile() : null;
    } catch (error) {
      console.error('Failed to load user profile:', error);
      return null;
    }
  }

  login(options?: Keycloak.KeycloakLoginOptions): Promise<void> {
    return this._keycloak.login({
      redirectUri: window.location.origin,
      ...options
    });
  }

  logout(options?: Keycloak.KeycloakLogoutOptions): Promise<void> {
    return this._keycloak.logout({
      redirectUri: window.location.origin,
      ...options
    });
  }

  accountManagement(): Promise<void> {
    return this._keycloak.accountManagement();
  }

  get authenticated(): boolean {
    return this._authenticated;
  }

  get token(): string | undefined {
    return this._keycloak?.token;
  }

  get tokenParsed(): Keycloak.KeycloakTokenParsed | undefined {
    return this._keycloak?.tokenParsed;
  }
}