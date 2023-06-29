import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from '../plant.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  plants: Plant[] = [];
  filteredPlants: Plant[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  search() {
    if (this.query.trim() === '') { // Check if the search query is empty
      this.filteredPlants = [];
      return;
    }

    if (!this.plants.length) { // Load data only if the plants array is empty
      this.http.get<Plant[]>('assets/mydatabase.plants.json').subscribe(
        data => {
          this.plants = data;
          this.filterPlants();
        },
        error => {
          console.error(error);
        }
      );
    } else {
      this.filterPlants();
    }
  }

  filterPlants() {
    const query = encodeURIComponent(this.query);
    const filteredPlants = this.plants.filter(plant => {
      return plant.local_name.toLowerCase().includes(query.toLowerCase());
    });
  
    const plantsGroupedByLocalName: {[key: string]: Plant[]} = {};
  
    filteredPlants.forEach(plant => {
      if (!plantsGroupedByLocalName[plant.local_name]) {
        plantsGroupedByLocalName[plant.local_name] = [plant];
      } else {
        plantsGroupedByLocalName[plant.local_name].push(plant);
      }
    });
  
    const plantsWithDiseasesTreated: Plant[] = [];
  
    Object.keys(plantsGroupedByLocalName).forEach(localName => {
      const plants = plantsGroupedByLocalName[localName];
      if (plants.length > 1) {
        plants.forEach(plant => {
          const plantWithDiseasesTreated = {...plant, local_name: `${localName} (${plant.diseases_treated})`};
          plantsWithDiseasesTreated.push(plantWithDiseasesTreated);
        });
      } else {
        plantsWithDiseasesTreated.push(plants[0]);
      }
    });
  
    this.filteredPlants = plantsWithDiseasesTreated;
  }
  selectPlant(plant: Plant) {
    this.router.navigate(['/plant', plant.sn, plant.who_icd_11_classification]);
  }

  onClearSearch() {
    this.query = '';
    this.filteredPlants = [];
  }

  listAllPlants() {
    this.http.get<Plant[]>('assets/mydatabase.plants.json').subscribe(
      data => {
        this.plants = data.map(plant => {
          if (plant.diseases_treated) {
            plant.local_name = `${plant.local_name} (${plant.diseases_treated})`;
          }
          return plant;
        });
        this.plants.sort((a, b) => a.local_name.localeCompare(b.local_name)); // Sort plants alphabetically by local_name
        this.filteredPlants = this.plants;
      },
      error => {
        console.error(error);
      }
    );
  }
}