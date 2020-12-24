import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {loginandsignRequest} from '../shared/loginandsignRequest';
import { UserAccountService } from '../services/userAccount.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm :FormGroup;
  loginrequest:loginandsignRequest;
  response:string;
  
  constructor(private fb: FormBuilder ,private loginservice:UserAccountService ,public dialogRef: MatDialogRef<LoginComponent>) {
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

  submitloginForm()
  {
    this.loginrequest = this.loginForm.value;
    //console.log(this.loginrequest);
      this.loginservice.login(this.loginrequest)
      .subscribe((data)=>console.log(data));

    this.dialogRef.close();
  }

}
