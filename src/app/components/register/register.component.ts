import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgClass,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  loading:boolean=false
  message!:string

  

  constructor(private _Router:Router,private _AuthService:AuthService){}

  registerForm:FormGroup = new FormGroup({
    displayName:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    password:new FormControl(null,[Validators.required ,Validators.pattern(/^[A-Z](?=.*[\W_])(?=.*\d.*\d.*\d).*$/)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phoneNumber:new FormControl(null ,[Validators.required,Validators.pattern(/^[0-9]{4,17}$/)]),
  })




  registerUser(){
    if(this.registerForm.valid){
      this.loading=true
      console.log(this.registerForm);
      this._AuthService.registerUser(this.registerForm.value).subscribe({
       next:(res)=>{console.log(res);
        this._Router.navigate(['/auth/login'])
        this.loading=true
        
       },
       error:(err)=>{console.log(err);
        this.loading=false
        this.message=err.error.message

       },
       complete:()=>{}
      })
    }
    else{
      this.registerForm.markAllAsTouched()
    }
    
  }
}
