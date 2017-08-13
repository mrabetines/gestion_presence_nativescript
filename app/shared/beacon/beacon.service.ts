import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Beacon } from "nativescript-ibeacon/nativescript-ibeacon.common";
import "rxjs/add/operator/map";
import { getString } from "application-settings";
import {Config} from "../../shared/config";

@Injectable()
export class BeaconService {
    apiUrl = Config.apiUrl;
    http:Http;
    constructor(http:Http) {
      this.http=http; 
        }
   
    getListBeacons() {
        console.log("i am in getListBeacons method ...!!")
        let headers = new Headers();
        headers.append("Authorization", "Bearer "+getString("token", "none"));
        return this.http.get(this.apiUrl + "beacons",{headers: headers})
            .map(res => res.json())
            .map(data => {
                let beaconsList = [];
                data.result.forEach((beacon) => {
                    beaconsList.push({ 'beacon': new Beacon(beacon.uuid, beacon.major, beacon.minor), 'id_beacon': beacon.id_Beacon });
                });
                return beaconsList;
            })
            .catch(this.handleErrors);
    }
    
     handleErrors(error: Response) {
        //console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
