import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClassService } from '../services/class.service';
import { Class } from '../shared/class';
import { CreateclassformComponent } from './createclassform/createclassform.component';
import { JoinClassFormComponent } from './join-class-form/join-class-form.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classess : Class[]; 
  

  constructor( private classService : ClassService , public dialog:MatDialog) { }

  ngOnInit(): void {

   // this.classess = this.classService.getClassess(); 
  }

  createClass()
  {
    this.dialog.open (CreateclassformComponent,{width:'500px',height:'450px'});
  }
  joinClass()
  {
    this.dialog.open (JoinClassFormComponent,{width:'500px',height:'320px'});
  }


}
