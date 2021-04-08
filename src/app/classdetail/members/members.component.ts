import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  id: string;

  constructor(private memberservice:MembersService,private route: ActivatedRoute,) { }

  classTeacher:string;
  classStudents:string[];

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    
      this.memberservice.getClassOwner(this.id)
      .subscribe(owner =>{
        console.log(this.id);
        this.classTeacher = owner;
        console.log("yes crt"+owner);
      });    
  
      this.memberservice.getClassMembers(this.id)
      .subscribe(members =>{
        console.log(this.id);
        this.classStudents = JSON.parse(members) as string[];
        console.log("yes students"+this.classStudents);
      });    

  }

}
