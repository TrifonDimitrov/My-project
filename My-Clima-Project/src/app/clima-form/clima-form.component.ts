import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clima-form',
  templateUrl: './clima-form.component.html',
  styleUrls: ['./clima-form.component.css'],
})
export class ClimaFormComponent {
  newClimate: any = {};

  constructor(private apiService: ApiService) {}

  onSubmit(): void {
    this.apiService.createClimate(this.newClimate).subscribe(this.newClimate)
    

  }
}
