import {Observable} from 'data/observable';
import {BeaconRegion, Beacon, BeaconCallback,BeaconLocationOptions, BeaconLocationOptionsIOSAuthType, BeaconLocationOptionsAndroidAuthType} from "nativescript-ibeacon/nativescript-ibeacon.common";
import {NativescriptIbeacon} from "nativescript-ibeacon";
import { PresenceService } from "./shared/services/presence.service";
 

export class BeaconDetector extends Observable implements BeaconCallback {

    private nativescriptIbeacon: NativescriptIbeacon;

    public mytext: string ;

    private regions: Array<BeaconRegion> = [] ;

    presenceService:PresenceService;

    token:string;

    constructor(presenceService: PresenceService) {
        super();
        this.presenceService=presenceService;
        console.log('Constructor of BeaconDetector');
        this.mytext="let's try our beacons";
        let options: BeaconLocationOptions = {
            iOSAuthorisationType: BeaconLocationOptionsIOSAuthType.Always,
            androidAuthorisationType: BeaconLocationOptionsAndroidAuthType.Coarse,
            androidAuthorisationDescription: "Location permission needed"
        };
        this.nativescriptIbeacon = new NativescriptIbeacon(this, options);
        //let self=this;
        this.presenceService.getListBeacons().subscribe(beaconsList=>{
            //console.log(JSON.stringify(beaconsList.json()));
            beaconsList.forEach(item => {
            console.log("constructor"+item.id_beacon); 
            this.regions.push(new BeaconRegion(item.id_beacon.toString(),item.beacon.proximityUUID,item.beacon.major,item.beacon.minor));
            
        })
            this.start();
        });
     
    }

    setToken(token:string)
    {
        this.token=token;
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
        this.regions.forEach(region => {
        this.nativescriptIbeacon.stopMonitoring(region);    
        });
        
        this.nativescriptIbeacon.unbind();
    }

    onBeaconManagerReady(): void {
        console.log("onBeaconManagerReady");
        //let self=this;
        this.regions.forEach(region => {
        this.nativescriptIbeacon.startMonitoring(region); 
        console.log("onBeaconManagerReady"+ region.identifier); 
        }); 
    }

    didRangeBeaconsInRegion(region: BeaconRegion, beacons: Beacon[]): void {
        
    }

    didFailRangingBeaconsInRegion(region: BeaconRegion, errorCode: number, errorDescription: string): void {
       
    }

    didEnterRegion(region: BeaconRegion) {
        //this.mytext="i have detected a beacon youpiiiiiiiiiii";
        console.log('Did enter Region ' + region.identifier);
        this.presenceService.getData(this.token).subscribe(message=>{console.log(message);});
    }

    didExitRegion(region: BeaconRegion) {
        this.mytext="i exited the region :'("; 
        console.log('Did leave Region '  + region.identifier);
    }

}