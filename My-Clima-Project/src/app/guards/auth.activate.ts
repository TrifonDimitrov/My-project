import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";


@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {

    return this.userService.isLoggedIn;

    } 
}
    
