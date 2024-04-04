import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Climate } from './types/climate.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getClima(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Climate>(`${apiUrl}/climates/${id}`);
  }

  getClimates() {
    const { apiUrl } = environment;
    return this.http.get<Climate[]>(`${apiUrl}/climates`);
  }

  createClima(
    brand: string,
    model: string,
    coolingCapacity: string,
    heatingCapacity: string,
    energyEfficiencyRating: string,
    price: string,
    description: string,
    imageUrl: string
  ) {
    return this.http.post<Climate>('/api/climates', {
      brand,
      model,
      coolingCapacity,
      heatingCapacity,
      energyEfficiencyRating,
      price,
      description,
      imageUrl,
    });
  }

  updateClima(modelId: string, climaData: Partial<Climate>): Observable<any> {
    return this.http.put<Climate>(`/api/climates/${modelId}`, climaData);
  }

  deleteClima(modelId: string): Observable<any> {
    return this.http.delete<Climate>(`/api/climates/${modelId}`);
  }
  
}

// updateClima(
//   brand: string,
//   model: string,
//   coolingCapacity: string,
//   heatingCapacity: string,
//   energyEfficiencyRating: string,
//   price: string,
//   description: string,
//   imageUrl: string,
//   _id: object,
// ) {
//   const { apiUrl } = environment;
//   return this.http.put<Climate>(`/api/climates/${_id}`, {
//     brand,
//     model,
//     coolingCapacity,
//     heatingCapacity,
//     energyEfficiencyRating,
//     price,
//     description,
//     imageUrl,
//     _id,
//   });
// }