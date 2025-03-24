import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ReviewComponent } from './components/review/review.component';

import { ListComponent } from './components/list/list.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RateComponent } from './copmonents/rate/rate.component';
import { title } from 'process';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path:'',redirectTo:'auth',pathMatch:'full'},
    {path:'auth',component:AuthComponent,children:[
     {path:'',redirectTo:'login',pathMatch:'full'},
     {path:'login',component:LoginComponent , title:'login'},
     {path:'register',component:RegisterComponent,title:'register'}
    ]},
 
    {path:'main',component:MainComponent , title:'main',children:[
        {path:'',redirectTo:'home',pathMatch:'full'},  
        {path:'home',component:HomeComponent,title:'home'},
        {path:'review',component:ReviewComponent ,title:'Review'},
        {path:'rate',component:RateComponent,title:'Rate'}, 
        {path:'list',component:ListComponent,title:'Research List'},
        {path:'notification',component:NotificationComponent ,title:'Notification'},
        {path:'det/:id',component:DetailsComponent,title:'details'}
    ]},
    {path:'adminLayout',component:AdminlayoutComponent , title:'AdminLayout',children:[
        {path:'',redirectTo:'home',pathMatch:'full'},  
        {path:'home',component:HomeComponent,title:'home'},
        {path:'review',component:ReviewComponent ,title:'Review'},
        {path:'rate',component:RateComponent,title:'Rate'},
        {path:'list',component:ListComponent,title:'Research List'},
        {path:'notification',component:NotificationComponent ,title:'Notification'},
        {path:'admin',component:AdminComponent,title:'AdminDashboard'}
    ]},
    {path:'**',component:NotFoundComponent,title:'Error404'}
];
