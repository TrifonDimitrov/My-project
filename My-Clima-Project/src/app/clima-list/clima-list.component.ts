import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clima-list',
  templateUrl: './clima-list.component.html',
  styleUrls: ['./clima-list.component.css']
})
export class ClimaListComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  ngOnInit(): void{
    this.apiService.getModels().subscribe((data: any) => {
      console.log(data);
    });
  }
}
