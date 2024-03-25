import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/const-domain';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailDomains = EMAIL_DOMAIN;

  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) { // Тук се приема формата, която ще се подаде от шаблона
    console.log(form.value);
    
    if (form.invalid) { 
      return;  
    }
    this.userService.login(); 
    this.router.navigate(['/models']);
  }
}
