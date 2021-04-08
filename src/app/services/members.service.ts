import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http:HttpClient) { }
 

  getClassOwner(classId:string)
  {
    return this.http.get<string>('http://localhost:8080/dashboard/members/owner/'+ classId,{ responseType: 'text' as 'json'  });
  }

  getClassMembers(classId:string)
  {
    return this.http.get<string>('http://localhost:8080/dashboard/members/'+ classId,{ responseType: 'text' as 'json'  });
  }

}
