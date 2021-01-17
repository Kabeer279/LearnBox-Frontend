import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from 'src/app/services/userAccount.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private useraccount:UserAccountService, private router: Router,) { }

  ngOnInit(): void {
  }

  logout()
  {
      this.useraccount.logout();
      this.router.navigateByUrl('/learn-box');
  }

}
