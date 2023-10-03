import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from "../../shared/models/user";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  //declare variables
  loginForm!: FormGroup;
  isSubmitted = false;
  error: string = '';

  loginUser?: User = new User();



  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }


  //life cycle Hook
  ngOnInit(): void {

    // create a reactive form
    this.loginForm = this.formBuilder.group({

      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // control for validation
  get formControls() {
    return this.loginForm.controls;
  }

  //functionality

  loginCredentials(): void {

    //setting value to issubmitted
    this.isSubmitted = true;

    //ckecking form is valid
    if (this.loginForm.invalid) {
      this.error = "Please enter Username and Password"
      return;
    }

    //form is valid
    if (this.loginForm.valid) {
      this.error = "";
      console.log(this.loginForm.value);
    }

    //call service for login
    this.authService.loginVerify(this.loginForm.value)
      .subscribe(Response => {
        console.log(Response);

        if (Response == null) {
          this.error = "Invalid Username and Password";
        }else {
          //session storage
        sessionStorage.setItem("USER_NAME",Response.data.UserName);
        sessionStorage.setItem("ROLE_ID",Response.data.role);


        //local storage
        localStorage.setItem("TOKEN", Response.data.ACCESSTOKEN);

        console.log(sessionStorage.getItem("USER_NAME"));
          //redirect to the repective page
          this.router.navigate(['/auth/login']);
        }


        // based on role ID -- authrntication

        if(Response.data.role===1){
          console.log("admin");

          localStorage.setItem("USER_NAME",Response.data.UserName);
          localStorage.setItem("ROLE_ID",Response.data.role);
          localStorage.setItem("TOKEN", Response.data.ACCESSTOKEN);

          this.router.navigate(['/home/admin']);
        }
        else if (Response.data.role==2) {
          console.log("manager");

          localStorage.setItem("USER_NAME",Response.data.UserName);
          localStorage.setItem("ROLE_ID",Response.data.role);
          localStorage.setItem("TOKEN", Response.data.ACCESSTOKEN);

          this.router.navigate(['home/user']);
        }
        else {
          this.error = " Sorry ! invalid credentials not allowes to this system"
        }
  
      })
  }

}

