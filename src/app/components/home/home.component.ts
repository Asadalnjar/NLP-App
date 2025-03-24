import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UploadService } from '../../core/services/upload.service';
import { FormsModule } from '@angular/forms';
import { log } from 'util';
import { error } from 'console';
import { Ireturn } from '../../core/interfaces/ireturn';
import { RateService } from '../../core/services/rate.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _UploadService:UploadService ,private _RateService:RateService){}
  isreturn:boolean=false
  isreturn2:boolean=false
  re:boolean=false
  correctedText: string = '';
  errorAnalysis: any = {};
  selectedFile: File | null = null;
  ReturnArray:Ireturn={} as Ireturn
  rate:any
  starts:any
  name:string=''
  type:string=''
  message:any

  reportG(){
    this.re=true

  }
  reportB(){
    this.re=false

  }
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] ?? null;
  }

  sendFile() {
    if (!this.selectedFile) {
      alert('Please select a PDF file.');
      return;
    }

    this._UploadService.correctPdf(this.selectedFile).subscribe(
      {
        next:(res)=>{console.log(res)
          this.isreturn=true
          this.ReturnArray=res
          this.errorAnalysis=res.error_type
          this.correctedText=res.corrected_text

        },
        error:(err)=>{console.log(err)}
      }
    );
  }


getCount(){
  return this._RateService.getUserReview().subscribe({
    next:(res)=>{console.log(res)
      this.rate=res.reviewCount
    },
    error:(err)=>{console.log(err)}
  })
}

getaverage(){
  return this._RateService.getAverageReview().subscribe({
    next:(res)=>{console.log(res)
      this.starts=res.averageStars
     
    },
    error:(err)=>{console.log(err)}
  })
}


sendtoBack(){
const DAta={
  researchName:this.name,
  researchType:this.type,
  correctedText:this.correctedText,
  errorType:this.errorAnalysis
}
console.log(DAta);

return this._UploadService.sendPdfTodb(DAta).subscribe({
  next:(res)=>{console.log(res)
    this.message=res.message
    this.isreturn2=true
  },
  error:(err)=>{console.log(err);
  }
})
}

}

