import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.services';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants() {
    this.plantService.getAllPlants().subscribe((plants: Plant[]) => {
      this.plants = plants;
    });
  }

  deletePlant(id: string) {
    this.plantService.deletePlant(id).subscribe(() => {
      this.getPlants();
    });
  }
}