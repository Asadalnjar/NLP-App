import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environ } from '../../core/environments/environment';
import { UploadService } from '../../core/services/upload.service';
import { log } from 'console';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  constructor(private _UploadService:UploadService){}
    textInput: string = '';
    correctedText: string = '';
    errorAnalysis: any = {};
    selectedFile: File | null = null;
    name:string=''
    type:string=''
    isreturn:boolean=false
    message:string=''
  
  
   
  
    sendText() {
      if (!this.textInput.trim()) {
        alert('Please enter text to correct.');
        return;
      }
  
      this._UploadService.correctText(this.textInput).subscribe({
        next:(res)=>{console.log(res)
          this.correctedText=res.corrected_text
          this.isreturn=true
        },
        error:(err)=>{console.log(err)}
      })
        
       
      
    }

    sendToBack(){
      const Data={
        researchName:this.name,
        researchType:this.type,
        correctedText:this.correctedText
      }

      return this._UploadService.sendText(Data).subscribe({
        next:(res)=>{console.log(res)
          this.message=res.message
        },
        error:(err)=>{console.log(err);
        }
      })
    }
  
   



}
