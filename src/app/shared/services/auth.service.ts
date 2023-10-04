import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  //verify login username and password
  public loginVerify(user: User): Observable<any> {     //public loginVerify(user: User) dan do this without return type as well

    //call web api for checking username and password
    return this.httpClient.get<User>(environment.apiUrl + "/api/users/" + user.userName + "&" + user.password);

  }

  public logOut(){

    //clear all session and local storage keys
    localStorage.removeItem("USER_NAME");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("JWT_TOKEN");
    sessionStorage.removeItem("USER_NAME");

    //redirect to Login
    this.router.navigate(['auth/login']);
  }
}
