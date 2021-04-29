import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassworkService {

  constructor(private http:HttpClient) { }


  
  uploadFile(file:File,classcode:any)
  {
    const data: FormData = new FormData();
    data.append('file', file);
    //console.log(file);

    const newRequest = new HttpRequest('POST', 'http://localhost:8080/dashboard/classwork/upload/'+classcode, data, {
    reportProgress: true,
    responseType: 'text'
    });
    return this.http.request(newRequest);
    // return this.http.post<string>('http://localhost:8080/dashboard/classwork/upload/',data,{ responseType: 'text' as 'json'  });
  // }

  }

  downloadFile(workId:number)
  {
    return this.http.get('http://localhost:8080/dashboard/classwork/download/'+workId,{  responseType: 'blob'  });
  }

  returnNoOfFiles(classId:number)
  {
    return this.http.get<string>('http://localhost:8080/dashboard/classwork/nooffiles/'+classId,{ responseType: 'text' as 'json'  });
  }





}
