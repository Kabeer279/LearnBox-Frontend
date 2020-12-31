import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../shared/class';
//import { classes } from '../shared/classess';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }
 

  createClass(classCreated:Class)
  {
    return this.http.post<string>('http://localhost:8080/dashboard/createclass',classCreated,{ responseType: 'text' as 'json'  });
  }

  postData(id:string)
  {
    return this.http.post('http://localhost:8080/dashboard/checkusers',id,{ responseType: 'text' as 'json'  });
    //,{ responseType: 'text' as 'json'  }  // when using response enitiy use this line
    //{ responseType: 'application/octet-stream'}
    //,{ responseType: 'blob'}
  }

  joinClass(classcode:string)
  {
    return this.http.post('http://localhost:8080/dashboard/joinclass',classcode,{ responseType: 'text' as 'json'  });
  }

  getCreatedClassess()
  {
     return this.http.get<string>('http://localhost:8080/dashboard/getcreatedclassess',{ responseType: 'text' as 'json'  });
  }

  getJoinedClassess()
  {
    return this.http.get<string>('http://localhost:8080/dashboard/getjoinedclassess',{ responseType: 'text' as 'json'  });
 }
}

