import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Climate } from '../../types/climate.model';

@Component({
  selector: 'app-clima-list',
  templateUrl: './clima-list.component.html',
  styleUrls: ['./clima-list.component.css']
})
export class ClimaListComponent implements OnInit {
  climates: Climate[] = [] // Тук ще се пазят климатиците, които ще се показват в шаблона
  isLoggedIn = true; // Тук ще се пази информация дали потребителят е логнат или не
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void{
    this.apiService.getClimates().subscribe((climates) => {
      console.log(climates);
      this.climates = climates;
    });
  }
}
