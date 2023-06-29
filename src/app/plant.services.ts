import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './plant.model';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlants(page: number, pageSize: number): Observable<Plant[]> {
    const url = `${this.API_URL}/plants?page=${page}&pageSize=${pageSize}`;
    return this.http.get<Plant[]>(url);
  }

  getAllPlants(): Observable<Plant[]> {
    const url = `${this.API_URL}/plants`;
    return this.http.get<Plant[]>(url);
  }

  filterPlants(searchQuery: string): Observable<Plant[]> {
    const url = `${this.API_URL}/plants?searchQuery=${searchQuery}`;
    return this.http.get<Plant[]>(url);
  }

  deletePlant(id: string): Observable<any> {
    const url = `${this.API_URL}/plants/${id}`;
    return this.http.delete(url);
  }

  savePlant(plant: Plant): Observable<Plant> {
    const url = `${this.API_URL}/plants`;
    return this.http.post<Plant>(url, plant);
  }

  updatePlant(id: string, plant: Plant): Observable<Plant> {
    const url = `${this.API_URL}/plants/${id}`;
    return this.http.put<Plant>(url, plant);
  }
}