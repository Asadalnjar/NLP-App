import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environ } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private _HttpClient:HttpClient) {}

  upload(data:any):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ text: data });

    return this._HttpClient.post(`${environ.baseUrlAi}/correct`, body, {
      headers,
      withCredentials: true, 
    });

  }



private apiUrl = 'https://montaser14-correction.hf.space/correct';

  

  correctText(text: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:4200', 
    });

    const body = JSON.stringify({ text });

    return this._HttpClient.post(this.apiUrl, body, { headers });
  }

  correctPdf(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      'Origin': 'http://localhost:4200',
    });

    return this._HttpClient.post(this.apiUrl, formData, { headers });
 }


sendPdfTodb(data:object):Observable<any>{
  return this._HttpClient.post(`http://researh.runasp.net/api/Research/submit-corrected-text`,data)
}

sendText(ob:object):Observable<any>{
  return this._HttpClient.post(`http://researh.runasp.net/api/Research/submit-WhioutError-text`,ob)
}


}
