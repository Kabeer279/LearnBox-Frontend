import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/shared/comment';
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
  submittedComment:Comment = new Comment;
  comments:Comment[] = [];
  commentForm :FormGroup;
  click:boolean = false;
  curDate = new Date();

  constructor(private classService : ClassService,private route: ActivatedRoute,
    private fb: FormBuilder ,private commentservice:CommentService  ) {
      this.createForm();
    }

ngOnInit() {

  this.getComments();
   this.id = this.route.snapshot.paramMap.get('id');
   
   setTimeout(()=>{
          this.classService.getCreatedClass(this.id)
              .subscribe(sclass => {
                  this.selectedClass = JSON.parse(sclass) as Class;
                  console.log(this.selectedClass.classname);
                });
              }, 1000)  ;

  this.commentForm = new FormGroup({
    comment: new FormControl('',Validators.required),
    
  })
 
}

createForm() {
  this.commentForm= this.fb.group({
    comment: ['', ],
   });
}

submitComment()
{
  console.log(this.commentForm.value);
  this.click = true;
  this.submittedComment.classId = this.selectedClass.id;
  this.submittedComment.text = this.commentForm.value.comment;
  this.submittedComment.time = this.curDate.toISOString();
  console.log(this.submittedComment.time);
  this.commentservice.createComment(this.submittedComment)
        .subscribe(comment =>{
         console.log(comment);
        });
        this.getComments();
        
}

getComments()
{
  setTimeout(()=>{
    this.commentservice.getAllComments(this.id)
        .subscribe (allcomments =>
          {
            this.comments = JSON.parse(allcomments) as Comment[];
            console.log(this.comments);
          }); 
      }, 500)  ;
}


  








}
