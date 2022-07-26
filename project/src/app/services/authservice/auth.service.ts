import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  gettoken(){  
    console.log('token')
    return !!localStorage.getItem("token");  
  }
}
