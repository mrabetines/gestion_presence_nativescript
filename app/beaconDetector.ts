import {Observable} from 'data/observable';
import {BeaconRegion, Beacon, BeaconCallback,BeaconLocationOptions, BeaconLocationOptionsIOSAuthType, BeaconLocationOptionsAndroidAuthType} from "nativescript-ibeacon/nativescript-ibeacon.common";
import {NativescriptIbeacon} from "nativescript-ibeacon";

export class BeaconDetector extends Observable implements BeaconCallback {

    private nativescriptIbeacon: NativescriptIbeacon;

    public mytext: string ;

    private region: BeaconRegion = null;

    constructor() {
        super();

        console.log('Constructor of BeaconDetector');
        this.mytext="let's try our beacons";
        let options: BeaconLocationOptions = {
            iOSAuthorisationType: BeaconLocationOptionsIOSAuthType.Always,
            androidAuthorisationType: BeaconLocationOptionsAndroidAuthType.Coarse,
            androidAuthorisationDescription: "Location permission needed"
        };
        this.nativescriptIbeacon = new NativescriptIbeacon(this, options);
        this.region = new BeaconRegion("HelloID", "B9407F30-F5F8-466E-AFF9-25556B57FE6D");
         
    }

    start() {
        this.mytext ="Starting .....";
        if (!this.nativescriptIbeacon.isAuthorised()) {
            console.log("NOT Authorised");
            this.nativescriptIbeacon.requestAuthorization()
                .then(() => {
                    console.log("Authorised by the user");
                    this.nativescriptIbeacon.bind();

                }, (e) => {
                    console.log("Authorisation denied by the user");
                })
        } else {
            console.log("Already authorised");
            this.nativescriptIbeacon.bind();
        }

    }

    stop() {
        this.mytext = "Stopping .....";
        this.nativescriptIbeacon.stopMonitoring(this.region);
        this.nativescriptIbeacon.unbind();
    }

    onBeaconManagerReady(): void {
        console.log("onBeaconManagerReady");
        this.nativescriptIbeacon.startMonitoring(this.region);
    }

    didRangeBeaconsInRegion(region: BeaconRegion, beacons: Beacon[]): void {
        
    }

    didFailRangingBeaconsInRegion(region: BeaconRegion, errorCode: number, errorDescription: string): void {
       
    }

    didEnterRegion(region: BeaconRegion) {
        this.mytext="i have detected a beacon youpiiiiiiiiiii";
        console.log('Did enter Region ' + region.identifier);
    }

    didExitRegion(region: BeaconRegion) {
        this.mytext="i exited the region :'("; 
        console.log('Did leave Region '  + region.identifier);
    }

}