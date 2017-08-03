"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const student_service_1 = require("../../shared/student/student.service");
const page_1 = require("ui/page");
const router_1 = require("nativescript-angular/router");
const PushNotifications = require("nativescript-push-notifications");
const application_settings_1 = require("application-settings");
const config_1 = require("../../shared/config");
var validator = require("email-validator");
let LoginComponent = class LoginComponent {
    constructor(nav, studentservice, page) {
        this.nav = nav;
        this.studentservice = studentservice;
        this.page = page;
        this.isLoading = false;
        this.email = "";
        this.pwd = "";
        //settings for the push notification 
        let settings = {
            //for android
            senderID: config_1.Config.senderID,
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
    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }
    submit() {
        this.isLoading = true;
        let fieldemail = this.field1.nativeElement;
        let fieldpwd = this.field2.nativeElement;
        fieldemail.dismissSoftInput();
        fieldpwd.dismissSoftInput();
        if (!validator.validate(this.email)) {
            alert("Enter a valid email address.");
            this.isLoading = false;
            return;
        }
        this.studentservice.login(this.email, this.pwd, this.token).subscribe((data) => {
            this.isLoading = false;
            if (data.result instanceof Array) {
                application_settings_1.setNumber("id", data.result[0]);
                application_settings_1.setString("qr_code", data.result[1]);
                console.log("logged in");
                this.nav.navigate(["/"], { clearHistory: true });
            }
            else {
                alert("can't find this account");
            }
        }, (error) => {
            this.isLoading = false;
            alert("error has occured");
        });
    }
};
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("field1"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "field1", void 0);
__decorate([
    core_1.ViewChild("field2"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "field2", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-login",
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login.css", "pages/login/login-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, student_service_1.StudentService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXlFO0FBQ3pFLDBFQUFzRTtBQUN0RSxrQ0FBOEI7QUFDOUIsd0RBQStEO0FBQy9ELHFFQUFxRTtBQUdyRSwrREFBMEQ7QUFDMUQsZ0RBQTJDO0FBQzNDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBTzNDLElBQWEsY0FBYyxHQUEzQjtJQWVJLFlBQW9CLEdBQXFCLEVBQVUsY0FBOEIsRUFBVSxJQUFVO1FBQWpGLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVZyRyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBV2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxxQ0FBcUM7UUFDckMsSUFBSSxRQUFRLEdBQUc7WUFDWCxhQUFhO1lBQ2IsUUFBUSxFQUFFLGVBQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVM7WUFDVCxLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxtQkFBbUIsRUFBRTtnQkFDakIsT0FBTyxFQUFFLENBQUM7d0JBQ04sVUFBVSxFQUFFLGlCQUFpQjt3QkFDN0IsS0FBSyxFQUFFLE1BQU07d0JBQ2IsY0FBYyxFQUFFLFlBQVk7d0JBQzVCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixzQkFBc0IsRUFBRSxJQUFJO3FCQUMvQixFQUFFO3dCQUNDLFVBQVUsRUFBRSxtQkFBbUI7d0JBQy9CLEtBQUssRUFBRSxRQUFRO3dCQUNmLGNBQWMsRUFBRSxZQUFZO3dCQUM1QixXQUFXLEVBQUUsSUFBSTt3QkFDakIsc0JBQXNCLEVB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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxJQUFJLENBQ0osQ0FBQztnQkFDRCxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQyxFQUNELENBQUMsS0FBSztZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FDcEIsQ0FBQTtJQUVMLENBQUM7Q0FJSixDQUFBO0FBekcyQjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtpREFBQztBQUN6QjtJQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQzs4QkFBUyxpQkFBVTs4Q0FBQztBQUNuQjtJQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQzs4QkFBUyxpQkFBVTs4Q0FBQztBQVIvQixjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLDhCQUE4QixDQUFDO0tBQ3ZFLENBQUM7cUNBZ0IyQix5QkFBZ0IsRUFBMEIsZ0NBQWMsRUFBZ0IsV0FBSTtHQWY1RixjQUFjLENBK0cxQjtBQS9HWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdHVkZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3R1ZGVudC9zdHVkZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgUHVzaE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdXNoLW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBzZXROdW1iZXIsc2V0U3RyaW5nfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcbnZhciB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBlbWFpbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwd2Q6IHN0cmluZztcclxuICAgIHByaXZhdGUgdG9rZW46IHN0cmluZztcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiZmllbGQxXCIpIGZpZWxkMTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJmaWVsZDJcIikgZmllbGQyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCJcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBzdHVkZW50c2VydmljZTogU3R1ZGVudFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucHdkID0gXCJcIjtcclxuICAgICAgICAvL3NldHRpbmdzIGZvciB0aGUgcHVzaCBub3RpZmljYXRpb24gXHJcbiAgICAgICAgbGV0IHNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAvL2ZvciBhbmRyb2lkXHJcbiAgICAgICAgICAgIHNlbmRlcklEOiBDb25maWcuc2VuZGVySUQsXHJcbiAgICAgICAgICAgIC8vZm9yIGlvc1xyXG4gICAgICAgICAgICBiYWRnZTogdHJ1ZSxcclxuICAgICAgICAgICAgc291bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIGFsZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXI6ICdSRUFEX0lERU5USUZJRVInLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ0NBTkNFTF9JREVOVElGSUVSJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGlvbk1vZGU6IFwiZm9yZWdyb3VuZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RydWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW3tcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0ZvckRlZmF1bHRDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JNaW5pbWFsQ29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tJT1M6IGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiAobWVzc2FnZSwgZGF0YSwgbm90aWZpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1FU1NBR0U6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTk9USUZJQ0FUSU9OOiBcIiArIEpTT04uc3RyaW5naWZ5KG5vdGlmaWNhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgLypkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICAgICAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL3JlZ2lzdGVyIGZvciBwdXNoIG5vdGlmIFxyXG4gICAgICAgIFB1c2hOb3RpZmljYXRpb25zLnJlZ2lzdGVyKHNldHRpbmdzLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRUdJU1RSQVRJT04gSUQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gZGF0YTtcclxuICAgICAgICAgICAgUHVzaE5vdGlmaWNhdGlvbnMub25NZXNzYWdlUmVjZWl2ZWQoc2V0dGluZ3Mubm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZmllbGRlbWFpbCA9IDxUZXh0RmllbGQ+dGhpcy5maWVsZDEubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgZmllbGRwd2QgPSA8VGV4dEZpZWxkPnRoaXMuZmllbGQyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgZmllbGRlbWFpbC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgZmllbGRwd2QuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgICAgIGlmKCF2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdHVkZW50c2VydmljZS5sb2dpbih0aGlzLmVtYWlsLCB0aGlzLnB3ZCwgdGhpcy50b2tlbikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgaWYoZGF0YS5yZXN1bHQgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TnVtYmVyKFwiaWRcIiwgZGF0YS5yZXN1bHRbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0cmluZyhcInFyX2NvZGVcIiwgZGF0YS5yZXN1bHRbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkIGluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFtcIi9cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KFwiY2FuJ3QgZmluZCB0aGlzIGFjY291bnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge3RoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3IgaGFzIG9jY3VyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdfQ==