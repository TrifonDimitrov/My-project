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

  getClimates() {
    const { apiUrl } = environment;

    return this.http.get<Climate[]>(`${apiUrl}/climates`);
  }

  createClimate(climateData: any): Observable<any> {
    const { apiUrl } = environment;
    return this.http.post<any>(`${apiUrl}/climates`, climateData);
  }
}
