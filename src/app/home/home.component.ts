import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Import CommonModule to enable ngClass and other directives
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Define the recentActivities property
  recentActivities = [
    {
      date: new Date(),
      type: 'Bloc',
      description: 'Un nouveau bloc a été ajouté.',
    },
    {
      date: new Date(),
      type: 'Foyer',
      description: 'Le foyer A a été rénové.',
    },
    {
      date: new Date(),
      type: 'Réservation',
      description: 'Une nouvelle réservation a été effectuée.',
    }
  ];

  // Optionally, initialize other properties like totalUniversities, etc.
  totalUniversities = 5;
  totalFoyers = 10;
  totalBlocs = 15;
  totalReservations = 25;
}
