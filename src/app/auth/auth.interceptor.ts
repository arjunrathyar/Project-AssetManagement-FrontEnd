import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Intercepting here!!");
    //-----if jwt is there, we can say next request.. otherwise go to login page -> not authorized

    //if login, not checking jwt
    console.log(request.url);
    if (request.url.includes('api/users')) {            //by pass login
      console.log("Not checking JWT");
    }

    //else
    else {
      let token = localStorage.getItem('JWT_TOKEN');


      //checking access role and jwt token are correct
      if (localStorage.getItem('JWT_TOKEN') && localStorage.getItem('ACCESS_ROLE')) {
        const newRequest = request.clone({
          setHeaders: {
            Authorization: `${token}`
          }
        });

        console.log(newRequest);

        //jwt is there
        return next.handle(newRequest);
      }
    }

    //else not authorized 
    return next.handle(request);
  }
}
