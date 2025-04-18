import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KeycloakService } from './keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private apiUrl = 'http://localhost:8093/microService/bloc';

  constructor(
    private http: HttpClient,
    private keycloakService: KeycloakService
  ) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.keycloakService.token}`,
      'Content-Type': 'application/json'
    });
  }

  getAllBlocs(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  getBlocById(blocId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${blocId}`, { headers: this.getHeaders() });
  }
  
  updateBloc(bloc: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${bloc.idBloc}`, bloc, { headers: this.getHeaders() });
  }
  
  deleteBloc(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
  
  filterBlocs(nomBloc: string, capaciteBloc: string): Observable<any> {
    const params = new HttpParams()
      .set('nomBloc', nomBloc)
      .set('capaciteBloc', capaciteBloc);
    return this.http.get(`${this.apiUrl}/filter`, { 
      params,
      headers: this.getHeaders() 
    });
  }

  addBloc(bloc: any): Observable<any> {
    return this.http.post(this.apiUrl, bloc, { headers: this.getHeaders() });
  }

  getCapaciteMoyenne(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/capacite-moyenne`, { 
      headers: this.getHeaders() 
    }).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        throw error;
      })
    );
  }
}