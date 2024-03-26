import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/const-domain';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswords } from 'src/app/shared/utils/match-passwords';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAIN)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswords('password', 'rePassword')],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
  }
}
