import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '../services/class.service';
import { Class } from '../shared/class';

@Component({
  selector: 'app-classdetail',
  templateUrl: './classdetail.component.html',
  styleUrls: ['./classdetail.component.css']
})
export class ClassdetailComponent implements OnInit {

  id : string;
  selectedClass : Class;

  constructor(private classService : ClassService,private route: ActivatedRoute) {}

ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   console.log(this.id);
  // this.selectedClass = this.classService.getClass(this.id); 
  // console.log(this.selectedClass);
}


}
