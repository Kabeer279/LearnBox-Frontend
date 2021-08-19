import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {loginandsignRequest} from '../shared/loginandsignRequest';
import { UserAccountService } from '../services/userAccount.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm :FormGroup;
  loginrequest:loginandsignRequest;
  response:string;
  
  constructor(private fb: FormBuilder ,private loginservice:UserAccountService ,
    private router: Router,private http:HttpClient,
    public dialogRef: MatDialogRef<LoginComponent>) {
    this.createForm();
  }

    
  createForm() {
    this.loginForm= this.fb.group({
      firstname: ['', ],
      lastname: ['', ],
     
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  }

  sample()
  {
    this.loginForm.value.username = "admin";
    this.loginForm.value.password = "123";
    this.submitloginForm();
  }
  submitloginForm()
  {
    this.loginrequest = this.loginForm.value;
    //console.log(this.loginrequest);
      // this.loginservice.login(this.loginrequest)
      // .subscribe((data)=>console.log(data),
      // );

    this.loginservice.setloggedin(true);
      
    this.dialogRef.close();
    if(this.loginrequest.username!='' && this.loginrequest.password!='')
    {
      this.loginservice.generateToken(this.loginrequest)
      .subscribe(
        (response:any) => {console.log(response.jwt)
          this.loginservice.login1(response.jwt); //storing the token in localStorage

          this.router.navigateByUrl('/dashboard');
        },
        error => console.log("Error logging in")
      );
    
    }

    

  }

}
