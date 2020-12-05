import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  dogs = [  {"id":1,"title":"yes", "rel":"as" ,"overview": "asd" } ,
            {"id":2,"title":"yes", "rel":"as" ,"overview": "asd" } ,
            {"id":3,"title":"yes", "rel":"as" ,"overview": "asd" } ,
            {"id":4,"title":"yes", "rel":"as" ,"overview": "asd" } ,
            {"id":5,"title":"yes", "rel":"as" ,"overview": "asd" } ,
            {"id":6,"title":"yes", "rel":"as" ,"overview": "asd" } ,
            {"id":7,"title":"yes", "rel":"as" ,"overview": "asd" } 
];
  
mode = new FormControl('over');

  constructor() { }

  ngOnInit(): void {
  }

}
