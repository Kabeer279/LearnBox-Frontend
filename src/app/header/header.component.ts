import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { UserAccountService } from '../services/userAccount.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
  logout()
  {
    this.useraccountservice.logout();
  }

  
}
