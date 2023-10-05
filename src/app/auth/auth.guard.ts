import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate( //respective routes will be activated
    next: ActivatedRouteSnapshot): boolean {

    //if false, redirect to login else show authorized page
    //check role: current role (from local storage) vs expect role (from app.routing.module)

    const currentRole = localStorage.getItem("ACCESS_ROLE");
    const expectedRole = next.data.role;

    //check condition 

    if (currentRole !== expectedRole) {
      //clear all session and local storage keys

      //this.toastr.error("Unauthorized Access!!")

      localStorage.removeItem("USER_NAME");
      localStorage.removeItem("ACCESS_ROLE");
      localStorage.removeItem("JWT_TOKEN");
      sessionStorage.removeItem("USER_NAME");

      //redirect to Login
      this.router.navigate(['auth/login']);
      return false;
    }

    return true;
  }

}
