import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-join-class-form',
  templateUrl: './join-class-form.component.html',
  styleUrls: ['./join-class-form.component.css']
})
export class JoinClassFormComponent implements OnInit {

 
  joinClassForm :FormGroup;
  joinClassCode:string;
  response:string;
  
  constructor(private fb: FormBuilder ,private classService:ClassService ,public dialogRef: MatDialogRef<JoinClassFormComponent>) {
    this.createForm();
  }
    
  createForm() {
    this.joinClassForm= this.fb.group({
      classcode: ['', ],
      
     
    });
  }

  ngOnInit(): void {
    this.joinClassForm = new FormGroup({
      classcode: new FormControl('',Validators.required),
      
    })
  }

  submitJoinClassForm()
  {
    this.joinClassCode = this.joinClassForm.value.classcode;
    console.log(this.joinClassCode);
     this.classService.joinClass(this.joinClassCode)
     .subscribe((data)=>console.log(data));

    this.dialogRef.close();
  }


}
