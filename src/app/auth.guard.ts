import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public _router:Router){}


  canActivate(): boolean {
    if(localStorage.getItem('token')){
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
