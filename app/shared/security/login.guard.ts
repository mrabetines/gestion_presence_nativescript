import { Injectable } from "@angular/core";
import { StudentService } from "../student/student.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { RouterExtensions } from "nativescript-angular/router";
import { getNumber } from "application-settings";

@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private studentservice: StudentService, private nav: RouterExtensions) { }
  canActivate(
    /*route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot*/
  )/*: Observable<boolean>|Promise<boolean>|boolean*/ {
    if (getNumber("id", 0) == 0) {
      this.nav.navigate(['login']);
      console.log("i am here");
      return false;
    }
    else {
      console.log("true");
      return true;
    }
  }
}