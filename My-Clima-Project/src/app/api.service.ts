import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Climate } from './types/climate.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getClimates() {
    const { apiUrl } = environment;

    return this.http.get<Climate[]>(`${apiUrl}/climates`);
  }

  getPosts() {}
}
