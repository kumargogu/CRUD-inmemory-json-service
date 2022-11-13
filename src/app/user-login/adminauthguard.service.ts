import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable({ providedIn: "root" })
    
export class AdminAuthGuard implements CanActivate{
constructor( private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        let isAdmin = localStorage.getItem('isAdmin');
        if (isAdmin && isAdmin == 'True') {
            return true
        }
        else {
            this.router.navigate(['/unauthorized'])
        }
    };
    

}