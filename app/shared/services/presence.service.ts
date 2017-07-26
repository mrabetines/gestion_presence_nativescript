import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {Beacon} from "nativescript-ibeacon/nativescript-ibeacon.common";
import "rxjs/add/operator/map";

@Injectable()
export class PresenceService {
     apiUrl = "http://192.168.1.5/api/v1/";

    constructor(private http: Http) {}

    getListBeacons()
    {   console.log("i am in getListBeacons method ...!!")
        return this.http.get(this.apiUrl+"beacons")
        .map(res => res.json())
        .map(data => {
        //console.log("data:"+JSON.stringify(data));
        let beaconsList = [];
        data.result.forEach((beacon) => {
        //console.log("data.result:"+JSON.stringify(beacon));
        beaconsList.push({'beacon':new Beacon(beacon.uuid, beacon.major, beacon.minor),'id_beacon':beacon.id_Beacon});
        //console.log(beacon.uuid);
        });
        return beaconsList; })
        .catch(this.handleErrors);
    }
    getData(token:string)
    {   console.log("i am in getData method ...!!")
        console.log(token);
        return this.http.post(this.apiUrl+"getdata",JSON.stringify({'token':token}))
        .map(res => res.json())
        .catch(this.handleErrors);  
    }
    markPresence(token:string,cin:string,mdp:string,id_Beacon:number)
    {   console.log("i am in markPresence method ...!!")
        return this.http.post(this.apiUrl+"presence",JSON.stringify({ "cin": cin,"mdp":mdp,"token":token,"id_Beacon":id_Beacon}))
        .map(res => res.json())
        .map(data => {
                      })
        .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
    //console.log(JSON.stringify(error.json()));
    //console.log("OOps error");
    return Observable.throw(error);
  }

}
