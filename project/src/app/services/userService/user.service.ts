import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpserviceService) { }

  register(data:any){
    let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    return this.http.postService('user/userSignUp', data, false, header)
  }
  login(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.postService('user/login', data, false, header);
  }

  forgot(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.postService('user/forgot', data, false, header);
  }

  resetPassword(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.postService('user/reset-password',data, false, header);
  }
}
