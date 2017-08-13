import { Component} from "@angular/core";
import * as PushNotifications from "nativescript-push-notifications";
import * as dialogs from "ui/dialogs";
import {Config} from "./shared/config";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
  
})

export class AppComponent  { 
     
    constructor()
    {
        //settings for the push notification 
        let settings = {
            //for android
            senderID: Config.senderID,
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
                alert(message);
                 
            }
        };
        //register for push notif 
        PushNotifications.register(settings, data => {
            console.log("REGISTRATION ID: " + JSON.stringify(data));
            //console.log(data);
            Token = data;
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log(error);
        });
    }


}
export let Token: string;
