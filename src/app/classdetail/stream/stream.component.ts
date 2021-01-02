import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '../../services/class.service';
import { Class } from '../../shared/class';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  id : string;
  selectedClass : Class = new Class;
 
  mes : string;

  classname:string;
  description:string;

  constructor(private classService : ClassService,private route: ActivatedRoute) {}

ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   console.log(this.id);
  
   setTimeout(()=>{
          this.classService.getCreatedClass(this.id)
              .subscribe(sclass => {
                  this.selectedClass = JSON.parse(sclass) as Class;
              
                  this.classname = this.selectedClass.classname;
                  console.log(this.selectedClass.classname);
                });
              }, 1000)  ;

  
   //this.description = this.selectedClass.description;
 
   
}


}
