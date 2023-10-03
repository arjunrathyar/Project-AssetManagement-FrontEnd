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
  loginForm!: FormGroup;   //exclamation means that empty fields could be accomodated...
  isSubmitted: boolean = false;
  error: string = '';

  loginUser?: User = new User();

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

    // create a reactive form
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  //get controls for validation
  get formControls() {
    return this.loginForm.controls;
  }

  //funtionality
  loginCredentials():void{

    //setting value to issubmitted
    this.isSubmitted=true;

    //checking form is valid
    if (this.loginForm.invalid){
      this.error="Please Enter UserName And Password";
      return;
    }

    //form is valid
    if (this.loginForm.valid){
      this.error="";
      console.log(this.loginForm.value);
      
      //call service for login i.e., checkin login functionality
      this.authService.loginVerify(this.loginForm.value).subscribe(response => {
        console.log(response);

        
        if (response.status==200) {
          this.router.navigate(['/purchase-order'])
        }
        
        
        if(response==null){
          this.error = "Invalid Username and Password";
        }
        
      })


    }
  }

}
