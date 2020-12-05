import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClassService } from '../services/class.service';
import { Class } from '../shared/class';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

 classess : Class[]; 
  

  constructor( private classService : ClassService) { }

  ngOnInit(): void {

    this.classess = this.classService.getClassess(); 
  }

}
