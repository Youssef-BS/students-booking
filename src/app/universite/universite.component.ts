import { Component, OnInit } from '@angular/core';
import { UniversiteService } from '../core/services/universite.service';
import { Universite } from '../core/models/universite.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ← À ajouter
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-universite',
  standalone: true, // ← important
  imports: [CommonModule, FormsModule, HttpClientModule,RouterModule], // ← ajouter FormsModule ici
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {
  universites: Universite[] = [];
  selectedUniversite: Universite | null = null;
  newUniversite: Universite = { idUniversite: 0, nomUniversite: '', adresse: '' };
  searchId: number = 0;
  filterAddress: string = '';

  constructor(private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.getAllUniversites();
  }

  getAllUniversites(): void {
    this.universiteService.getAll().subscribe(data => this.universites = data);
  }

  getById(): void {
    this.universiteService.getById(this.searchId).subscribe(data => {
      this.selectedUniversite = data;
    });
  }

  createUniversite(): void {
    this.universiteService.create(this.newUniversite).subscribe(() => {
      this.getAllUniversites();
      this.newUniversite = { idUniversite: 0, nomUniversite: '', adresse: '' };
    });
  }

  updateUniversite(): void {
    if (this.selectedUniversite) {
      this.universiteService.update(this.selectedUniversite.idUniversite, this.selectedUniversite).subscribe(() => {
        this.getAllUniversites();
        this.selectedUniversite = null;
      });
    }
  }

  deleteUniversite(id: number): void {
    this.universiteService.delete(id).subscribe(() => {
      this.getAllUniversites();
    });
  }

  filterUniversites(): void {
    this.universiteService.filterByAddress(this.filterAddress).subscribe(data => this.universites = data);
  }
}
