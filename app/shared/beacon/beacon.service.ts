import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Beacon } from "nativescript-ibeacon/nativescript-ibeacon.common";
import "rxjs/add/operator/map";
import { getNumber } from "application-settings";
import {Config} from "../../shared/config";

@Injectable()
export class BeaconService {
    apiUrl = Config.apiUrl;

    constructor(private http: Http) { }

    getListBeacons() {
        console.log("i am in getListBeacons method ...!!")
        return this.http.get(this.apiUrl + "beacons")
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
