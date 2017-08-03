import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { StudentService } from "../../shared/student/student.service";
import { Page} from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as PushNotifications from "nativescript-push-notifications";
import * as dialogs from "ui/dialogs";
import { TextField } from "ui/text-field";
import { setNumber,setString} from "application-settings";
import {Config} from "../../shared/config";
var validator = require("email-validator");

@Component({
    selector: "my-login",
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login.css", "pages/login/login-common.css"]
})
export class LoginComponent implements OnInit {

    private email: string;
    private pwd: string;
    private token: string;
    isLoading = false;
    @ViewChild("container") container: ElementRef;
    @ViewChild("field1") field1: ElementRef;
    @ViewChild("field2") field2: ElementRef;

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login"

    }
    constructor(private nav: RouterExtensions, private studentservice: StudentService, private page: Page) {
        this.email = "";
        this.pwd = "";
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
                /*dialogs.alert({
                    message: message,
                    okButtonText: "OK"
                }).then(() => {
                    console.log("Dialog closed!");
                });*/
                alert(message);
                 
            }
        };
        //register for push notif 
        PushNotifications.register(settings, data => {
            console.log("REGISTRATION ID: " + JSON.stringify(data));
            //console.log(data);
            this.token = data;
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log(error);
        });
    }


    submit() {
        this.isLoading = true;
        let fieldemail = <TextField>this.field1.nativeElement;
        let fieldpwd = <TextField>this.field2.nativeElement;
        fieldemail.dismissSoftInput();
        fieldpwd.dismissSoftInput();
        if(!validator.validate(this.email))
        {
            alert("Enter a valid email address.");
            this.isLoading = false;
            return;
        }
        this.studentservice.login(this.email, this.pwd, this.token).subscribe(
            (data) => {
                 this.isLoading = false;
                 if(data.result instanceof Array)
                 {
                    setNumber("id", data.result[0]);
                    setString("qr_code", data.result[1]);
                    console.log("logged in");
                    this.nav.navigate(["/"], { clearHistory: true });
                 }
                 else
                 {
                 alert("can't find this account");
                }
            },
            (error) => {this.isLoading = false;
                        alert("error has occured");
                            }
        )

    }



}