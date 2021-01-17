import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }


  createComment(comment:Comment)
  {
     return this.http.post<string>('http://localhost:8080/comment/save/',comment,{ responseType: 'text' as 'json'  });
  }

  getAllComments(classId:string)
  {
     return this.http.get<string>('http://localhost:8080/comment/getallcomments/'+ classId,{ responseType: 'text' as 'json'  });
  }
}
