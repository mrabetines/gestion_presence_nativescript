import { Observable } from 'data/observable';
import { BeaconRegion, Beacon, BeaconCallback, BeaconLocationOptions, BeaconLocationOptionsIOSAuthType, BeaconLocationOptionsAndroidAuthType } from "nativescript-ibeacon/nativescript-ibeacon.common";
import { NativescriptIbeacon } from "nativescript-ibeacon";
import { BeaconService } from "./beacon.service";
import { PresenceService } from "../presence/presence.service";
import { getNumber } from "application-settings";


export class BeaconDetector extends Observable implements BeaconCallback {

    private nativescriptIbeacon: NativescriptIbeacon;

    private regions: Array<BeaconRegion> = [];

    beaconService: BeaconService;

    presenceService: PresenceService;

    private id_region: number;
     
    constructor(beaconService: BeaconService,presenceService: PresenceService) {
        super();
        this.beaconService=beaconService;
        this.presenceService=presenceService;
        
       /* this.beaconService = AppInjector.get(BeaconService);
        this.presenceService = AppInjector.get(PresenceService);*/
        console.log('Constructor of BeaconDetector');
        let options: BeaconLocationOptions = {
            iOSAuthorisationType: BeaconLocationOptionsIOSAuthType.Always,
            androidAuthorisationType: BeaconLocationOptionsAndroidAuthType.Coarse,
            androidAuthorisationDescription: "Location permission needed"
        };
        this.nativescriptIbeacon = new NativescriptIbeacon(this, options);
        this.beaconService.getListBeacons().subscribe(beaconsList => {
            beaconsList.forEach(item => {
                console.log("constructor" + item.id_beacon);
                this.regions.push(new BeaconRegion(item.id_beacon.toString(), item.beacon.proximityUUID, item.beacon.major, item.beacon.minor));
             })
            this.start();
        });

    }
    getIdRegion() {
        return this.id_region;
    }

    start() {
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
        this.regions.forEach(region => {
            this.nativescriptIbeacon.stopMonitoring(region);
        });

        this.nativescriptIbeacon.unbind();
    }

    onBeaconManagerReady(): void {
        console.log("onBeaconManagerReady");
        this.regions.forEach(region => {
            this.nativescriptIbeacon.startMonitoring(region);
            this.id_region = parseInt(region.identifier);
            console.log("onBeaconManagerReady" + region.identifier);
        });
    }

    didRangeBeaconsInRegion(region: BeaconRegion, beacons: Beacon[]): void {

    }

    didFailRangingBeaconsInRegion(region: BeaconRegion, errorCode: number, errorDescription: string): void {

    }

    didEnterRegion(region: BeaconRegion) {
        console.log('Did enter Region ' + region.identifier);
        this.presenceService.markPresence(parseInt(region.identifier),getNumber("id", 0),).subscribe(
            () => { console.log("marked present") },
            (error) => { //alert("error has occured");
                          console.log("ERROR: "); }
        )
    }

    didExitRegion(region: BeaconRegion) { 
        console.log('Did leave Region ' + region.identifier);
    }

}