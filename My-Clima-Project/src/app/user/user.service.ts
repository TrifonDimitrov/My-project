import { Injectable } from '@angular/core';
import { UserLogin } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserLogin | undefined;
  USER_KEY = '[user]';

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      username: 'test',
      email: 'test@abv.bg',
      password: '123',
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
