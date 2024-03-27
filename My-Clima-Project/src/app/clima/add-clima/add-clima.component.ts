import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-clima',
  templateUrl: './add-clima.component.html',
  styleUrls: ['./add-clima.component.css'],
})
export class AddClimaComponent {
  constructor(private api: ApiService) {}

  addModel(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    
  }
}
