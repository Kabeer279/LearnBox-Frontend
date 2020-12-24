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
  selectedClass : Class;
  mes : string;

  constructor(private classService : ClassService,private route: ActivatedRoute) {}

ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   console.log(this.id);
  // this.selectedClass = this.classService.getClass(this.id); 
   console.log(this.selectedClass);
   this.classService.postData(this.id)
   .subscribe(data => console.log(data));
   
}


}
