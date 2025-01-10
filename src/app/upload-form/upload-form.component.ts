import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrl: './upload-form.component.css'
})
export class UploadFormComponent {

  selectedFiles?: any
  currentFileUpload=false
  percentage=0

  constructor(private uploadFile:UploadService){}

  selectFiles(event:any){
    console.log(event.target.files)
    this.selectedFiles=event.target.files
    this.percentage=0
    this.currentFileUpload=false
  }

  upload(){
    console.log("upload")
    console.log(this.selectedFiles)
    this.currentFileUpload=true

    for (const file of this.selectedFiles) { 
     this.uploadFile.uploadFile(file)     
      .subscribe(
      (percentage:any)=>
        {
          this.percentage=Math.round(percentage?percentage:0)
          console.log(this.percentage)
        }
    )
  }

  }


}
