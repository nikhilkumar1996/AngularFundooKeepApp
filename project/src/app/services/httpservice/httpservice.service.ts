import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  Baseurl = environment.baseurl;

  constructor(private http:HttpClient) { }

  postService(url:string, data:any, token:boolean=false, httpOptions:any)
  {
      return this.http.post(this.Baseurl+url, data, token && httpOptions);
  }
  getService(url:string, token:boolean=false, httpOptions:any){
    return this.http.get(this.Baseurl+url, token && httpOptions)
  }
}
