import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from '../plant.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() plants: Plant[] = [];
  query = '';

  constructor(private router: Router) {}

  goToPlant(plant: Plant) {}
}