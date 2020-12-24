import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserAccountService } from '../services/userAccount.service';
import {loginandsignRequest} from '../shared/loginandsignRequest';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  signupForm :FormGroup;
  signuprequest:loginandsignRequest;
  response:string;
  
  constructor(private fb: FormBuilder ,private signupservice:UserAccountService ,public dialogRef: MatDialogRef<SignupComponent>) {
    this.createForm();
  }

    
  createForm() {
    this.signupForm= this.fb.group({
      username: ['', ],
      password: ['', ],
     
    });
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  }

  signup()
  {
    this.signuprequest = this.signupForm.value;
    //console.log(this.loginrequest);
      this.signupservice.signup(this.signuprequest)
      .subscribe((data)=>console.log(data));

    this.dialogRef.close();
  }

}
