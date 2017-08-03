import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import {Config} from "../../shared/config";

@Injectable()
export class StudentService {
    private apiUrl = Config.apiUrl;

    constructor(private http: Http) { }
 
    login(email: string, pwd: string,token:string) {
        console.log("email: "+email+" pwd: "+pwd+" token: "+token);
        return this.http.post(this.apiUrl + "student",{'email': email,'pwd': pwd,'token':token})
            .map(response => response.json())
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}