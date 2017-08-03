import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Beacon } from "nativescript-ibeacon/nativescript-ibeacon.common";
import "rxjs/add/operator/map";
import {Config} from "../../shared/config";

@Injectable()
export class PresenceService {
    apiUrl = Config.apiUrl;

    constructor(private http: Http) { }
    markPresence(id_Beacon: number,id_Etudiant:number) {
        console.log("i am in markPresence method ...!!")
        return this.http.post(this.apiUrl + "presence", { "id_Etudiant": id_Etudiant, "id_Beacon": id_Beacon })
            .map(res => res.json())
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        return Observable.throw(error);
    }

}
