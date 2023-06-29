import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './plant.model';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private readonly API_URL = 'assets/mydatabase.plants.json';

  constructor(private http: HttpClient) { }

  getPlants(page: number, pageSize: number, searchQuery: string = ''): Observable<Plant[]> {
    const url = `${this.API_URL}`;
    return this.http.get<Plant[]>(url);
  }

  deletePlant(id: string): Observable<any> {
    // Delete method is not supported for local JSON files
    return new Observable<any>();
  }

  savePlant(plant: Plant): Observable<Plant> {
    // Save method is not supported for local JSON files
    return new Observable<Plant>();
  }

  updatePlant(id: string, plant: Plant): Observable<Plant> {
    // Update method is not supported for local JSON files
    return new Observable<Plant>();
  }
}