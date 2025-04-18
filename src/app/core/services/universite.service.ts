import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite.model';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = 'http://localhost:8093/universites';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.apiUrl}/all`);
  }

  getById(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.apiUrl}/search/${id}`);
  }

  create(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(this.apiUrl, universite);
  }

  update(id: number, universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/${id}`, universite);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  filterByAddress(address: string): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.apiUrl}/filter?address=${address}`);
  }
}
