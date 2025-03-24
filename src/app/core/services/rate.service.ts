import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environ } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private _HttpClient:HttpClient) { }

  sendRate(rateDate:object):Observable<any>{
  return this._HttpClient.post(`${environ.baseUrlBack}/Review/add`,rateDate)
  }

  getUserReview():Observable<any>{
    return this._HttpClient.get(`http://researh.runasp.net/api/Review/count/string`)
  }
  getAverageReview():Observable<any>{
    return this._HttpClient.get(`http://researh.runasp.net/api/Review/average/string`)
  }
}
