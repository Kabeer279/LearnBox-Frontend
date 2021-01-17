import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UserAccountService } from '../services/userAccount.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.css']
})
export class CoverpageComponent implements OnInit {

  constructor(public dialog:MatDialog , private useraccountservice :UserAccountService) { }

  ngOnInit(): void {
  }

  loginForm()
  {
    this.dialog.open (LoginComponent,{width:'500px',height:'450px'});
  }
  signupForm()
  {
    this.dialog.open (SignupComponent,{width:'500px',height:'450px'});
  }
  

  

}
