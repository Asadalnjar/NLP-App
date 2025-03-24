import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../core/services/dashboard.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  returnobject:any={} as Error
  upDate:boolean=false
  
  name:any
  type:any
  message!:string
  
  itemId:any
  constructor(private  _ActivatedRoute:ActivatedRoute,private _DashboardService:DashboardService){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{this.itemId=res.get('id')
        console.log(res.get('id'));
        
      }
    })

    this._DashboardService.getByid(this.itemId).subscribe({
      next:(res)=>{console.log(res);
        this.returnobject = res
      }
    })

}

Delete(){
  return this._DashboardService.Delete(this.itemId).subscribe({
    next:(res)=>{console.log(res);
    }
  })
}



Sheks(){
  this.upDate=true
}

update(){
  const Data={
    researchName:this.name,
    researchType:this.type
  }
  return this._DashboardService.update(this.itemId,Data).subscribe({
    next:(res)=>{console.log(res);
      this.message='Research updated successfully'
    }
  })
}


}
