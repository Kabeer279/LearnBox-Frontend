import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from '../services/userAccount.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  loggedin:boolean;
  constructor(private useraccount:UserAccountService , private router: Router) { }

  ngOnInit(): void {
    
    this.loggedin = this.useraccount.getloggedin();
   
    console.log(this.loggedin);
  }
  
  ngAfterContentChecked()
  {
    this.loggedin = this.useraccount.getloggedin();
 
  }
  

  
}
