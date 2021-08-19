import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClassService } from 'src/app/services/class.service';
import { Class } from 'src/app/shared/class';

@Component({
  selector: 'app-createclassform',
  templateUrl: './createclassform.component.html',
  styleUrls: ['./createclassform.component.css']
})
export class CreateclassformComponent implements OnInit {

  
  createClassForm :FormGroup;
  classCreated:Class;
  response:string;
  
  constructor(private fb: FormBuilder ,private classService:ClassService ,public dialogRef: MatDialogRef<CreateclassformComponent>) {
    this.createForm();
  }
    
  createForm() {
    this.createClassForm= this.fb.group({
      classname: ['', ],
      description: ['', ],
     
    });
  }

  ngOnInit(): void {
    this.createClassForm = new FormGroup({
      classname: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
    })
  }

  sample()
  {
    this.createClassForm.value.classname = "cse";
    this.createClassForm.value.description = "cse";
    this.submitCreateClassForm();
  }
  submitCreateClassForm()
  {
    this.classCreated = this.createClassForm.value;
    console.log(this.classCreated);
     this.classService.createClass(this.classCreated)
     .subscribe((data)=>console.log(data));

    this.dialogRef.close();
  }

}
