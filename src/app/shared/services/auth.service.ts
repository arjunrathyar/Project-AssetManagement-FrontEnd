import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  //verify login username and password
  public loginVerify(user: User): Observable<any> {     //public loginVerify(user: User) dan do this without return type as well

    //call web api for checking username and password
    return this.httpClient.get<User>(environment.apiUrl + "/api/users/" + user.userName + "&" + user.password);

  }
}
