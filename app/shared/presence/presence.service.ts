import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Beacon } from "nativescript-ibeacon/nativescript-ibeacon.common";
import "rxjs/add/operator/map";
import {Config} from "../../shared/config";
import { getString } from "tns-core-modules/application-settings/application-settings";

@Injectable()
export class PresenceService {
    apiUrl = Config.apiUrl;
    http:Http;
    constructor(http:Http) {
      this.http=http; 
        }
    markPresence(id_Beacon: number,id_Etudiant:number) {
        let headers = new Headers();
        headers.append("Authorization", "Bearer "+getString("token", "none"));
        console.log("i am in markPresence method ...!!")
        return this.http.post(this.apiUrl + "presence", { "id_Etudiant": id_Etudiant, "id_Beacon": id_Beacon },{headers: headers})
            .map(res => res.json())
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
