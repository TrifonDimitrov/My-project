import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Climate } from 'src/app/types/climate.model';

@Component({
  selector: 'app-current-clima', 
  templateUrl: './current-clima.component.html', 
  styleUrls: ['./current-clima.component.css'], 
})
export class CurrentClimaComponent implements OnInit {
  clima = {} as Climate; // Тук ще се пази климатика, която ще се показва в шаблона

  constructor(private api: ApiService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      const modelId = params['modelId']; // Взимаме id-то на климатиката от URL-а

      this.api.getClima(modelId).subscribe((clima) => { // Извикваме метода от ApiService, който връща климатика по id
        this.clima = clima; 
      });
    });
  }
}
