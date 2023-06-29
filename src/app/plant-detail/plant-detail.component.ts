import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Plant } from '../plant.interface';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailsComponent implements OnInit {
  plant?: Plant;
  family?: string;
  sn?: string;
  author?: string;
  localName?: string;
  whoIcd11Classification?: string;
  modeOfApplicationStandardized?: string;
  partsUsed?: string;
  diseasesTreated?: string;
  preparationAdministration?: string;

  constructor(private route: ActivatedRoute, private http: HttpClient, private location: Location) { }

  ngOnInit() {
    const sn = this.route.snapshot.paramMap.get('sn');
    const whoIcd11Classification = this.route.snapshot.paramMap.get('who_icd_11_classification');
    this.http.get<Plant[]>('assets/mydatabase.plants.json').subscribe(
      data => {
        const plant = data.find(plant => plant.sn === sn && plant.who_icd_11_classification === whoIcd11Classification);
        if (plant) {
          this.family = plant.family;
          this.sn = plant.sn;
          this.author = plant.author;
          this.localName = plant.local_name;
          this.whoIcd11Classification = plant.who_icd_11_classification;
          this.modeOfApplicationStandardized = plant.mode_of_application_standardized;
          this.partsUsed = plant.parts_used;
          this.diseasesTreated = plant.diseases_treated;
          this.preparationAdministration = plant.preparation_administration;
          this.plant = plant;
        } else {
          console.error(`Plant with sn ${sn} and who_icd_11_classification ${whoIcd11Classification} not found`);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}