import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authservice/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
    
  canActivate(): boolean {  
      if (!this.authService.gettoken()) {  
          this.router.navigateByUrl("/login"); 
        return false 
      }  
      return this.authService.gettoken();  
    } 
  
}
   
  

