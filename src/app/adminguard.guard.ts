import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  
  constructor(public _router:Router){}


  canActivate(): boolean {
   let role_id = localStorage.getItem('role');
    if(role_id == '1'){
     // console.log(this._authservice.loggedin);
     // console.log("1");
        return true;
      }else{
     //   console.log("2");
        this._router.navigate(['login'])
        return false;
      }
    }

  
}
