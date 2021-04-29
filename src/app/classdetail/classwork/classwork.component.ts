import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClassworkService } from 'src/app/services/classwork.service';
import { saveAs } from 'file-saver';
import { ActivatedRoute } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-classwork',
  templateUrl: './classwork.component.html',
  styleUrls: ['./classwork.component.css']
})
export class ClassworkComponent implements OnInit {

  selectedValue: string;
  id: any;
  ids: number[];
 

  constructor(private https: HttpClient,private classworkservice:ClassworkService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.returnnooffiles();
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  name:string;
  file:File;
  selectedFiles: FileList;
  selectedFile = null;
  changeImage = false;
  currentFileUpload: File;
  check:File;
  

  change($event) {
    this.changeImage = true;
  }
  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }

  upload()
  {
  this.currentFileUpload = this.selectedFiles.item(0);
  this.classworkservice.uploadFile(this.currentFileUpload,this.id)
        .subscribe();

  this.returnnooffiles();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  download(workId:number)
  {

    this.classworkservice.downloadFile(workId)
      .subscribe(blob => saveAs(blob, "DOC"));

      // .subscribe(data=>{
      //   console.log(this.check+"asdsad");
      //    this.url = data;
      //  this.urlcheck = window.URL.createObjectURL(data);
      //    console.log(this.urlcheck);
      //});

      
  }

  returnnooffiles()
  {
          setTimeout(()=>{
          this.classworkservice.returnNoOfFiles(this.id)
          .subscribe(data=>{
            console.log("no Of files:"+data)
            this.ids = JSON.parse(data) as number[];
          });
        }, 1000)  ;
  }


}
