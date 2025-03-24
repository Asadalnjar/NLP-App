import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _HttpClient:HttpClient) { }

  getAll(){
    return this._HttpClient.get(`http://researh.runasp.net/api/Dashboard/all-researches`)
  }

  getByid(id:any){
    return this._HttpClient.get(`http://researh.runasp.net/api/Dashboard/get-by-id/${id}`)
  }
  Delete(id:any){
    return this._HttpClient.delete(`http://researh.runasp.net/api/Dashboard/delete/${id}`)
  }
  update(id:any,data:any){
    return this._HttpClient.put(`http://researh.runasp.net/api/Dashboard/update/${id}`,data)
  }
}
