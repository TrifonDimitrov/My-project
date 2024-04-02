import { Injectable, OnDestroy } from '@angular/core';
import { UserLogin } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserLogin | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserLogin | undefined;
  USER_KEY = '[user]';

  userSubscribsion: Subscription;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.userSubscribsion = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<UserLogin>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    userName: string,
    email: string,
    password: string,
    rePassword: string
  ) {
   
    return this.http
      .post<UserLogin>('/api/register', {
        userName,
        email,
        password,
        rePassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
    return this.http.get<UserLogin>('/api/users/profile').pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(userName: string, email: string, tel?: string) {
    return this.http.put<UserLogin>('/api/users/profile', {userName, email, tel}).pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.userSubscribsion.unsubscribe();
  }
}
