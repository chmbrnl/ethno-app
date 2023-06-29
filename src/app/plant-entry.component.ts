import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Plant } from 'src/app/plant.interface';

@Component({
  selector: 'app-plant-entry',
  templateUrl: './plant-entry.component.html',
  styleUrls: ['./plant-entry.component.css']
})
export class PlantEntryComponent implements OnInit {
  plant: Plant | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.http.get<Plant>(`assets/mydatabase.plants/${id}.json`).subscribe(
      data => {
        this.plant = data;
      },
      error => {
        console.error(error);
      }
    );
  }
}