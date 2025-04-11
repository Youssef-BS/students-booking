import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer, Foyerr } from '../models/foyer.model';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8089/microService/foyer'; 

  constructor(private http: HttpClient) {}

  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(this.apiUrl);
  }

  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.apiUrl}`, foyer);
  }

  deleteFoyer(idFoyer: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idFoyer}`);
  }

  addFoyer(newFoyer: Foyerr): Observable<Foyer> {
    return this.http.post<Foyer>(this.apiUrl, newFoyer);
  }

  
}
