import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/const-domain';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { UserProfile } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  showEditForm: boolean = false;

  UserProfile: UserProfile = {
    userName: '',
    email: '',
    tel: '',
  };

  form = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAIN)]],
    tel: [''],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    const { userName, email } = this.userService.user!;
    this.UserProfile = { userName, email, tel: '' };

    this.form.setValue({
      userName,
      email,
      tel: '',
    });
  }

  onToggle(): void {
    this.showEditForm = !this.showEditForm;
  }

  onSave(): void {
    if (this.form.invalid) {
      return;
    }
    this.UserProfile = this.form.value as UserProfile;
    const { userName, email, tel } = this.UserProfile;
    this.userService.updateProfile(userName, email, tel).subscribe(() => {
      this.onToggle();
    });
  }

  onCancel(ev: Event): void {
    ev.preventDefault();
    this.onToggle();
  }
}
