import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClassService } from '../services/class.service';
import { UserAccountService } from '../services/userAccount.service';
import { Class } from '../shared/class';
import { CreateclassformComponent } from './createclassform/createclassform.component';
import { JoinClassFormComponent } from './join-class-form/join-class-form.component';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  createdClasses: Class[];
  joinedClasses:Class[];
  urls = ['123','Biology','cse','English','EEE','Electronics'];
  url = 'cse';
 
 
  constructor( private classService : ClassService , public dialog:MatDialog ,
    private useraccount:UserAccountService) { }

  ngOnInit(){
    
      this.getcrClassess();
      this.getjoiClassess();
   
  }

  // created classess
  getcrClassess()
  {
    setTimeout(()=>{
      this.classService.getCreatedClassess()
      .subscribe(createdclasses =>{
          // this.createdClasses = createdClasses;
          this.createdClasses = JSON.parse(createdclasses) as Class[];
          console.log(this.createdClasses);
          
       }); 
       }, 500)  ;
  }

  //Joined classess
  getjoiClassess()
  {
    setTimeout(()=>{
      this.classService.getJoinedClassess()
      .subscribe(joinedclassess =>{
          // this.createdClasses = createdClasses;
          this.joinedClasses = JSON.parse(joinedclassess) as Class[];
          console.log(this.joinedClasses);
       }); 
       }, 500)  ;
  }
 
  createClass()
  {
    this.dialog.open (CreateclassformComponent,{width:'500px',height:'450px'});
    //console.log(this.dialog);
    this.dialog.afterAllClosed.subscribe(result => {
      this.getcrClassess();
      
    });
   
  }
  joinClass()
  {
    this.dialog.open (JoinClassFormComponent,{width:'500px',height:'320px'});
    this.dialog.afterAllClosed.subscribe(result => {
      this.getjoiClassess();
      
    });

  }


}
