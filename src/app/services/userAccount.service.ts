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
    return this.http.post('http://localhost:8080/useraccount/signup',signupdetails); 
  }

  generateToken(logindetails:loginandsignRequest) //it authenticates and generates a token
  {
    return this.http.post('http://localhost:8080/useraccount/authenticate',logindetails);
  }

  login1(token){
    localStorage.setItem("token", token);
    return true;
  }
  
  isLoggedIn()
  {
    let token = localStorage.getItem("token");
    if(token == undefined || token === ' '|| token === null)
    {
      return false;
    }  
    else{
      return true;
    }

  }

  getToken()
  {
    let token = localStorage.getItem("token");
    return token;
  }
  logout1()
  {
    localStorage.removeItem("token");
    
  }

  check()
  {
    return this.http.get('http://localhost:8080/useraccount/login/');
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

  login(logindetails:loginandsignRequest)
  {
   // var headers = new Headers();

    console.log(logindetails);
    return this.http.post<string>('http://localhost:8080/useraccount/login/',logindetails,{ responseType: 'text' as 'json'  });
  }


  //{ responseType: 'text' as 'json'  }
}
