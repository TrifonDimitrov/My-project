import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-clima',
  templateUrl: './add-clima.component.html',
  styleUrls: ['./add-clima.component.css'],
})
export class AddClimaComponent {
  constructor(private api: ApiService, private router: Router) {}

  addModel(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {
      brand,
      model,
      coolingCapacity,
      heatingCapacity,
      energyEfficiencyRating,
      price,
      description,
      imageUrl,
    } = form.value;
    this.api
      .createClima(
        brand,
        model,
        coolingCapacity,
        heatingCapacity,
        energyEfficiencyRating,
        price,
        description,
        imageUrl
      )
      .subscribe(() => {
        this.router.navigate(['/models']);
      });
  }
}
