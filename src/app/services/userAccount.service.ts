import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { loginandsignRequest } from '../shared/loginandsignRequest';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  loggedin = false;
  constructor(private http:HttpClient) { }
 
  signup(signupdetails:loginandsignRequest)
  {
    console.log(signupdetails);
    return this.http.post<string>('http://localhost:8080/useraccount/signup/',signupdetails,{ responseType: 'text' as 'json'  }); 
  }

  login(logindetails:loginandsignRequest)
  {
    var headers = new Headers();

    console.log(logindetails);
    return this.http.post<string>('http://localhost:8080/useraccount/login/',logindetails,{ responseType: 'text' as 'json'  });
  }

  getloggedin()
  {
    return this.loggedin;
  }
  setloggedin(value:boolean)
  {
    this.loggedin = value;
  }

  logout()
  {
    return this.http.delete('http://localhost:8080/useraccount/logout/',{ responseType: 'text' as 'json'  })
    .subscribe(data => console.log(data));
  }

  



  //{ responseType: 'text' as 'json'  }
}
