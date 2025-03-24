import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard.service';
import { Li } from '../../core/interfaces/li';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  constructor(private _DashboardService:DashboardService){}

 returnArray:Li[]=[]
  
     ngOnInit(): void {
      this._DashboardService.getAll().subscribe({
        next:(res)=>{console.log(res);
       this.returnArray=res as any[]
          
        },
        error:(err)=>{console.log(err);
        }
      })
     }



}
