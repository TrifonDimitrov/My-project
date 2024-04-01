import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/const-domain';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { UserProfile } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditForm: boolean = false;

  UserProfile: UserProfile = {
    userName: 'Trif',
    email: 'Trif@gmail.com',
    tel: '0585466328',
  };

  form = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAIN)]],
    tel: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onToggle(): void {
    this.showEditForm = !this.showEditForm;
  }

  onSave(): void {
    if (this.form.invalid) {
      return;
    }
    this.UserProfile = this.form.value as UserProfile;
    this.onToggle();
  }

  onCancel(ev: Event): void {
    ev.preventDefault();
    this.onToggle();
  }
}
