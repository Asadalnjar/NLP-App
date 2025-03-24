import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgClass,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    role:string=''
    resText:string=''
    loading:boolean=false
  constructor(private _Router:Router , private _AuthService:AuthService){}


  loginFrom:FormGroup = new FormGroup({
    
    password:new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Za-z](?=.*[\W_])(?=.*\d.*\d.*\d).*$/)]),
    email:new FormControl(null,[Validators.required,Validators.email])
    
  })


  loginUser(){
      
    if(this.loginFrom.valid){
      this.loading=true
      console.log(this.loginFrom);
      this._AuthService.loginUser(this.loginFrom.value).subscribe({
        next:(res)=>{console.log(res);
          this.loading=false
          this.resText=res.message
          if(this.role =='admin'){
            this._Router.navigate(['/adminLayout/home'])
          }
          else{
            this._Router.navigate(['/main/home'])
          }
          
          sessionStorage.setItem('token',res.token) 
          console.log(res.token)
        },
        error:(err)=>{console.log(err);
          this.loading=false
          this.resText=err.error.message 
        }
      })
    }
    else{
      this.loginFrom.markAllAsTouched()
    }
    
    
  }
  rolee(){
    console.log(this.role)
  }
}
