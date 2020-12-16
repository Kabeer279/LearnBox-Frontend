import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../shared/class';
import { classes } from '../shared/classess';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

    getClassess(): Class[] 
  {
    return classes;
  }

  getClass(id:string) : Class
  {
    
      return classes[id];
  }

  postData(id:string)
  {
    return this.http.post<string>('http://localhost:8080/useraccount/checkusers',id);
    //,{ responseType: 'text' as 'json'  }  // when using response enitiy use this line
  }

}

