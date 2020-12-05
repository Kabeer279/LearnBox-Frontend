import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../shared/class';
import { classes } from '../shared/classess';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor() { }

    getClassess(): Class[] 
  {
    return classes;
  }

  getClass(id:string) : Class
  {
      return classes[id];
  }


}

