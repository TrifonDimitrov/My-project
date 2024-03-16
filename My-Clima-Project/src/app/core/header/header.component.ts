import { Component } from '@angular/core';
import { ClimaFormComponent } from 'src/app/clima-form/clima-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ClimaFormComponent]
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(public climaForm: ClimaFormComponent) {}
  
 
}
