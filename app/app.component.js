"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const beaconDetector_1 = require("./beaconDetector");
const PushNotifications = require("nativescript-push-notifications");
const presence_service_1 = require("./shared/services/presence.service");
const dialogs_1 = require("nativescript-angular/directives/dialogs");
const login_modal_1 = require("./login_modal/login.modal");
let AppComponent = class AppComponent {
    //the constructor
    constructor(presenceService, modal, vcRef) {
        this.presenceService = presenceService;
        this.modal = modal;
        this.vcRef = vcRef;
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
                /*dialogs.alert(JSON.stringify(message)).then(()=> {
                console.log("Dialog closed!!!");
});*/
                if (message == 'cliquer moi') {
                    this.showModal();
                }
            }
        };
        //register for push notif 
        PushNotifications.register(settings, data => {
            console.log("REGISTRATION ID: " + JSON.stringify(data));
            this.myBeaconDetector.setToken(JSON.stringify(data));
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, error => {
            console.log(error);
        });
    }
    //for the login modal
    showModal() {
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(login_modal_1.LoginModalComponent, options).then(res => {
            console.log(res[0] + "&&&&&" + res[1]);
        });
    }
    ngOnInit() {
        console.log("ngOnInit");
        this.myBeaconDetector = new beaconDetector_1.BeaconDetector(this.presenceService);
        //this.myBeaconDetector.start();
    }
    ngOnDestroy() {
        console.log("ngOnDestroy");
        this.myBeaconDetector.stop();
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [presence_service_1.PresenceService, dialogs_1.ModalDialogService, core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkU7QUFDM0UscURBQWlEO0FBQ2pELHFFQUFxRTtBQUVyRSx5RUFBcUU7QUFDckUscUVBQTZFO0FBQzdFLDJEQUFnRTtBQVFoRSxJQUFhLFlBQVksR0FBekI7SUFNSSxpQkFBaUI7SUFDakIsWUFBb0IsZUFBZ0MsRUFBUyxLQUF5QixFQUFVLEtBQXVCO1FBQW5HLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkgsNkNBQTZDO1FBQzdDLHFDQUFxQztRQUNyQyxJQUFJLFFBQVEsR0FBRztZQUNQLGFBQWE7WUFDYixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTO1lBQ1QsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsbUJBQW1CLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBRSxDQUFDO3dCQUNOLFVBQVUsRUFBRSxpQkFBaUI7d0JBQzdCLEtBQUssRUFBRSxNQUFNO3dCQUNiLGNBQWMsRUFBRSxZQUFZO3dCQUM1QixXQUFXLEVBQUUsS0FBSzt3QkFDbEIsc0JBQXNCLEVBQUUsSUFBSTtxQkFDL0IsRUFBRTt3QkFDQyxVQUFVLEVBQUUsbUJBQW1CO3dCQUMvQixLQUFLLEVBQUUsUUFBUTt3QkFDZixjQUFjLEVBQUUsWUFBWTt3QkFDNUIsV0FBVyxFQUFFLElBQUk7d0JBQ2pCLHNCQUFzQixFQUFFLElBQUk7cUJBQy9CLENBQUM7Z0JBQ0YsVUFBVSxFQUFFLENBQUM7d0JBQ1QsVUFBVSxFQUFFLGVBQWU7d0JBQzNCLHdCQUF3QixFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7d0JBQ2xFLHdCQUF3QixFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7cUJBQ3JFLENBQUM7YUFDTDtZQUNELHVCQUF1QixFQUFFLElBQUk7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsMkJBQTJCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVk7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDN0Q7O0tBRVg7Z0JBQ1csRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUM1QixDQUFDO29CQUNHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztZQUVMLENBQUM7U0FDSixDQUFDO1FBQ0YsMEJBQTBCO1FBQzFCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRCxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUM5RSxDQUFDLEVBQUUsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBRUQscUJBQXFCO0lBQ1YsU0FBUztRQUNoQixJQUFJLE9BQU8sR0FBRztZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGlDQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvRCxnQ0FBZ0M7SUFFaEMsQ0FBQztJQUNELFdBQVc7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0osQ0FBQTtBQXpGWSxZQUFZO0lBTHhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7cUNBU3VDLGtDQUFlLEVBQWdCLDRCQUFrQixFQUFpQix1QkFBZ0I7R0FQOUcsWUFBWSxDQXlGeEI7QUF6Rlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0LE9uRGVzdHJveSxWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmVhY29uRGV0ZWN0b3J9IGZyb20gXCIuL2JlYWNvbkRldGVjdG9yXCI7XG5pbXBvcnQgKiBhcyBQdXNoTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXB1c2gtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUHJlc2VuY2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3ByZXNlbmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IExvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbl9tb2RhbC9sb2dpbi5tb2RhbFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxPbkRlc3Ryb3kgeyBcbiAgICAvL3NvbWUgYXR0cmlidXRlc1xuICAgIHB1YmxpYyAgbXlCZWFjb25EZXRlY3RvcjpCZWFjb25EZXRlY3RvcjtcbiAgICBcbiAgICB0b2tlbjpzdHJpbmc7XG4gICAgIFxuICAgIC8vdGhlIGNvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmVzZW5jZVNlcnZpY2U6IFByZXNlbmNlU2VydmljZSxwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpe1xuICAgIC8vY29uc29sZS5sb2coXCJpdCdzIHRoZSBjb25zdHJ1Y3RvciBtZXRob2RcIik7XG4gICAgLy9zZXR0aW5ncyBmb3IgdGhlIHB1c2ggbm90aWZpY2F0aW9uIFxuICAgIGxldCBzZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIC8vZm9yIGFuZHJvaWRcbiAgICAgICAgICAgIHNlbmRlcklEOiBcIjY5OTc2MTg5OTQ2N1wiLFxuICAgICAgICAgICAgLy9mb3IgaW9zXG4gICAgICAgICAgICBiYWRnZTogdHJ1ZSxcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxuICAgICAgICAgICAgYWxlcnQ6IHRydWUsXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ1JFQURfSURFTlRJRklFUicsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnQ0FOQ0VMX0lERU5USUZJRVInLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JEZWZhdWx0Q29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0Zvck1pbmltYWxDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0lPUzogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0FuZHJvaWQ6IChtZXNzYWdlLCBkYXRhLCBub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1FU1NBR0U6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREFUQTogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT1RJRklDQVRJT046IFwiICsgSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgLypkaWFsb2dzLmFsZXJ0KEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKS50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCEhIVwiKTtcbn0pOyovXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZSA9PSAnY2xpcXVlciBtb2knKVxuICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vcmVnaXN0ZXIgZm9yIHB1c2ggbm90aWYgXG4gICAgICAgIFB1c2hOb3RpZmljYXRpb25zLnJlZ2lzdGVyKHNldHRpbmdzLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVHSVNUUkFUSU9OIElEOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIHRoaXMubXlCZWFjb25EZXRlY3Rvci5zZXRUb2tlbihKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICBQdXNoTm90aWZpY2F0aW9ucy5vbk1lc3NhZ2VSZWNlaXZlZChzZXR0aW5ncy5ub3RpZmljYXRpb25DYWxsYmFja0FuZHJvaWQpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy9mb3IgdGhlIGxvZ2luIG1vZGFsXG4gICAgICAgIHB1YmxpYyBzaG93TW9kYWwoKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29udGV4dDoge30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuICAgICAgICB9O1xuICAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTG9naW5Nb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzWzBdK1wiJiYmJiZcIityZXNbMV0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAgXG5uZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0XCIpO1xuICAgIHRoaXMubXlCZWFjb25EZXRlY3Rvcj1uZXcgQmVhY29uRGV0ZWN0b3IodGhpcy5wcmVzZW5jZVNlcnZpY2UpO1xuICAgIC8vdGhpcy5teUJlYWNvbkRldGVjdG9yLnN0YXJ0KCk7XG5cbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJuZ09uRGVzdHJveVwiKTsgIFxuICAgIHRoaXMubXlCZWFjb25EZXRlY3Rvci5zdG9wKCk7ICBcbiAgICB9XG59XG4iXX0=