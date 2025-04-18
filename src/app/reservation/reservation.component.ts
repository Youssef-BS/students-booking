import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Assurez-vous que FormsModule est importé correctement
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReservationService } from '../core/services/reservation.service';
import { Reservation } from '../core/models/reservation.model';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],  // Tous les imports nécessaires
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [ReservationService]  // Services doivent être dans le tableau 'providers'
})
export class ReservationComponent {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations(): void {
    this.reservationService.getReservations().subscribe({
      next: (data) => this.reservations = data,
      error: (err) => console.error('Error fetching reservations:', err)
    });
  }
}
