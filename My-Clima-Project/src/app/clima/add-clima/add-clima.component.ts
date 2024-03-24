import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-clima',
  templateUrl: './add-clima.component.html',
  styleUrls: ['./add-clima.component.css'],
})
export class AddClimaComponent {
  constructor(private api: ApiService) {}

  addModel(
    ev: Event,
    brand: string,
    model: string,
    coolingCapacity: string,
    heatingCapacity: string,
    energyEfficiencyRating: string,
    price: string,
    description: string,
    imageUrl: string
  ) {
    ev.preventDefault();
    this.api.createClima(
      brand,
      model,
      coolingCapacity,
      heatingCapacity,
      energyEfficiencyRating,
      price,
      description,
      imageUrl
    );
  }
}
