import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild,Router } from '@angular/router';
import { AuthSlyService } from '../services/authsly.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
   constructor(private router:Router,public authService:AuthSlyService){}

    canActivate():boolean {
        console.log('check is in progress');
        if (this.authService.isLoggedIn()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }


    canActivateChild():boolean {
        console.log('check child router is in progress');
        if (this.authService.isLoggedIn()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}