import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RateService } from '../../core/services/rate.service';
import { error } from 'console';

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent  {
  starsarray: number[] = [1, 2, 3, 4, 5];
  stars: number = 0; 
  researchName:string=''
  comment:string=''
  resText:any
  constructor(private _RateService:RateService){}

 
  rate(value: number) {
    this.stars = value;
  }


 

sendDataRate(){
  const review={
    researchName:this.researchName,
    stars:this.stars,
    comment:this.comment
  }
  this._RateService.sendRate(review).subscribe({
    next:(res)=>{console.log('rate is send',res)
      this.resText=res.message
    },
    error:(err)=>{console.log('error in sending data',err);}
   
    
  });
  console.log(review);
}





}

