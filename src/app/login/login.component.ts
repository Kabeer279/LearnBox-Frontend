import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {loginandsignRequest} from '../shared/loginandsignRequest';
import { UserAccountService } from '../services/userAccount.service';
import { Router } from '@angular/router';



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
    private router: Router,
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
    this.loginForm.value.username = "owner";
    this.loginForm.value.password = "1234";
    this.submitloginForm();
  }
  submitloginForm()
  {
    this.loginrequest = this.loginForm.value;
    //console.log(this.loginrequest);
      this.loginservice.login(this.loginrequest)
      .subscribe((data)=>console.log(data),
      );

   this.loginservice.setloggedin(true);
      
    this.dialogRef.close();
    //this.router.navigateByUrl('/class');
  }

}
