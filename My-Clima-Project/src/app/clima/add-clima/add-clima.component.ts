import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-clima',
  templateUrl: './add-clima.component.html',
  styleUrls: ['./add-clima.component.css']
})
export class AddClimaComponent {
  newClimate: any = {};

  constructor(private api: ApiService) {}

  onSubmit(): void {
    this.api.createClimate(this.newClimate).subscribe(this.newClimate);
  }
}
