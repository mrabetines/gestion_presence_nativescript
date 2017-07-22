import { Component,OnInit,OnDestroy} from "@angular/core";
import { BeaconDetector} from "./beaconDetector";
import * as PushNotifications from "nativescript-push-notifications";
import * as dialogs from "ui/dialogs";


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit,OnDestroy { 
    //some attributes
    public  myBeaconDetector:BeaconDetector;
    
     
    //the constructor
    constructor(){
    //console.log("it's the constructor method");
    //settings for the push notification 
    let settings = {
            //for android
            senderID: "699761899467",
            //for ios
            badge: true,
            sound: true,
            alert: true,
            interactiveSettings: {
                actions: [{
                    identifier: 'READ_IDENTIFIER',
                    title: 'Read',
                    activationMode: "foreground",
                    destructive: false,
                    authenticationRequired: true
                }, {
                    identifier: 'CANCEL_IDENTIFIER',
                    title: 'Cancel',
                    activationMode: "foreground",
                    destructive: true,
                    authenticationRequired: true
                }],
                categories: [{
                    identifier: 'READ_CATEGORY',
                    actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                    actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                }]
            },
            notificationCallbackIOS: data => {
                console.log("DATA: " + JSON.stringify(data));
            },
            notificationCallbackAndroid: (message, data, notification) => {
                console.log("MESSAGE: " + JSON.stringify(message));
                console.log("DATA: " + JSON.stringify(data));
                console.log("NOTIFICATION: " + JSON.stringify(notification));
                dialogs.alert(JSON.stringify(message)).then(()=> {
                console.log("Dialog closed!!!");
});
            }
        };
        //register for push notif 
        PushNotifications.register(settings, data => {
            console.log("REGISTRATION ID: " + JSON.stringify(data));
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log(error);
        });
        
        
    }
     
ngOnInit(): void {
    console.log("ngOnInit");
    this.myBeaconDetector=new BeaconDetector();
    this.myBeaconDetector.start();

    }
    ngOnDestroy(): void {
    console.log("ngOnDestroy");  
    this.myBeaconDetector.stop();  
    }
}
