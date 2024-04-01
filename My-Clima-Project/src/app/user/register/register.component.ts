import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAIN } from 'src/app/const-domain';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswords } from 'src/app/shared/utils/match-passwords';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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

  get passGroup() {
    return this.form.get('passGroup')
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const { userName, email, passGroup: {password, rePassword} = {} } = this.form.value;

    this.userService.register(userName!, email!, password!, rePassword!).subscribe(() => {
      this.router.navigate(['/models'])
    })
  }
}
