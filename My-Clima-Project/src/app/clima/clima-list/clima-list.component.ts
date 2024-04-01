import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Climate } from '../../types/climate.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-clima-list',
  templateUrl: './clima-list.component.html',
  styleUrls: ['./clima-list.component.css']
})
export class ClimaListComponent implements OnInit {
  climates: Climate[] = [] // Тук ще се пазят климатиците, които ще се показват в шаблона

  constructor(private apiService: ApiService, private userService: UserService) { }
 
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get userId(): string {
    return this.userService.user?.id || '';
  }
  
  
  ngOnInit(): void{
    this.apiService.getClimates().subscribe((climates) => {
      console.log(climates);
      this.climates = climates;
    });
  }

}
