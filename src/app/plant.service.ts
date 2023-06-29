import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) { }
  getAllPlants() {
    return this.http.get('http://localhost:3000/plants');
  }
}
