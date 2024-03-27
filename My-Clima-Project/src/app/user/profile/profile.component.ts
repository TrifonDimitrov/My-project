import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/const-domain';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { UserProfile } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showEditForm: boolean = false;

  UserProfile: UserProfile = {
    username: 'Trif',
    email: 'Trif@gmail.com', 
    tel: '0888888888'
  }

  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAIN)]],
    tel: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onToggle(): void{
    this.showEditForm = !this.showEditForm;
  }
 

  onSave(): void{
    console.log('invoked');
    console.log(this.form.value);
    
    
    if(this.form.invalid){
      return;
    }
    this.UserProfile = this.form.value as UserProfile;
    this.onToggle();
  }
}
