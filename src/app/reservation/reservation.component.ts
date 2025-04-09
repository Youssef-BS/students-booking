import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../core/services/reservation.service';
import { Reservation } from '../core/models/reservation.model';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
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
