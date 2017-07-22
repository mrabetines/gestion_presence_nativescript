"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var beaconDetector_1 = require("./beaconDetector");
var PushNotifications = require("nativescript-push-notifications");
var dialogs = require("ui/dialogs");
var AppComponent = (function () {
    //the constructor
    function AppComponent() {
        //console.log("it's the constructor method");
        //settings for the push notification 
        var settings = {
            senderID: "699761899467",
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
            notificationCallbackIOS: function (data) {
                console.log("DATA: " + JSON.stringify(data));
            },
            notificationCallbackAndroid: function (message, data, notification) {
                console.log("MESSAGE: " + JSON.stringify(message));
                console.log("DATA: " + JSON.stringify(data));
                console.log("NOTIFICATION: " + JSON.stringify(notification));
                dialogs.alert(JSON.stringify(message)).then(function () {
                    console.log("Dialog closed!!!");
                });
            }
        };
        PushNotifications.register(settings, function (data) {
            console.log("REGISTRATION ID: " + JSON.stringify(data));
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, function (error) {
            console.log(error);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.myBeaconDetector = new beaconDetector_1.BeaconDetector();
        this.myBeaconDetector.start();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
        this.myBeaconDetector.stop();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsbURBQWlEO0FBQ2pELG1FQUFxRTtBQUNyRSxvQ0FBc0M7QUFRdEMsSUFBYSxZQUFZO0lBS3JCLGlCQUFpQjtJQUNqQjtRQUNBLDZDQUE2QztRQUM3QyxxQ0FBcUM7UUFDckMsSUFBSSxRQUFRLEdBQUc7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxtQkFBbUIsRUFBRTtnQkFDakIsT0FBTyxFQUFFLENBQUM7d0JBQ04sVUFBVSxFQUFFLGlCQUFpQjt3QkFDN0IsS0FBSyxFQUFFLE1BQU07d0JBQ2IsY0FBYyxFQUFFLFlBQVk7d0JBQzVCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixzQkFBc0IsRUFBRSxJQUFJO3FCQUMvQixFQUFFO3dCQUNDLFVBQVUsRUFBRSxtQkFBbUI7d0JBQy9CLEtBQUssRUFBRSxRQUFRO3dCQUNmLGNBQWMsRUFBRSxZQUFZO3dCQUM1QixXQUFXLEVBQUUsSUFBSTt3QkFDakIsc0JBQXNCLEVBQUUsSUFBSTtxQkFDL0IsQ0FBQztnQkFDRixVQUFVLEVBQUUsQ0FBQzt3QkFDVCxVQUFVLEVBQUUsZUFBZTt3QkFDM0Isd0JBQXdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQzt3QkFDbEUsd0JBQXdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztxQkFDckUsQ0FBQzthQUNMO1lBQ0QsdUJBQXVCLEVBQUUsVUFBQSxJQUFJO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUNELDJCQUEyQixFQUFFLFVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZO2dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUMsQ0FBQztZQUNTLENBQUM7U0FDSixDQUFDO1FBQ0YsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFBLElBQUk7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEQsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDOUUsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUwsK0JBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFDLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUU5QixDQUFDO0lBQ0Qsa0NBQVcsR0FBWDtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7QUFqRVksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDOztHQUVXLFlBQVksQ0FpRXhCO0FBakVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCxPbkRlc3Ryb3l9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCZWFjb25EZXRlY3Rvcn0gZnJvbSBcIi4vYmVhY29uRGV0ZWN0b3JcIjtcbmltcG9ydCAqIGFzIFB1c2hOb3RpZmljYXRpb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LE9uRGVzdHJveSB7IFxuICAgIC8vc29tZSBhdHRyaWJ1dGVzXG4gICAgcHVibGljICBteUJlYWNvbkRldGVjdG9yOkJlYWNvbkRldGVjdG9yO1xuICAgIFxuICAgICBcbiAgICAvL3RoZSBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgLy9jb25zb2xlLmxvZyhcIml0J3MgdGhlIGNvbnN0cnVjdG9yIG1ldGhvZFwiKTtcbiAgICAvL3NldHRpbmdzIGZvciB0aGUgcHVzaCBub3RpZmljYXRpb24gXG4gICAgbGV0IHNldHRpbmdzID0ge1xuICAgICAgICAgICAgc2VuZGVySUQ6IFwiNjk5NzYxODk5NDY3XCIsXG4gICAgICAgICAgICBiYWRnZTogdHJ1ZSxcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxuICAgICAgICAgICAgYWxlcnQ6IHRydWUsXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ1JFQURfSURFTlRJRklFUicsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnQ0FOQ0VMX0lERU5USUZJRVInLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JEZWZhdWx0Q29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0Zvck1pbmltYWxDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0lPUzogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0FuZHJvaWQ6IChtZXNzYWdlLCBkYXRhLCBub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1FU1NBR0U6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREFUQTogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT1RJRklDQVRJT046IFwiICsgSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChKU09OLnN0cmluZ2lmeShtZXNzYWdlKSkudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhISFcIik7XG59KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUHVzaE5vdGlmaWNhdGlvbnMucmVnaXN0ZXIoc2V0dGluZ3MsIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRUdJU1RSQVRJT04gSUQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgUHVzaE5vdGlmaWNhdGlvbnMub25NZXNzYWdlUmVjZWl2ZWQoc2V0dGluZ3Mubm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuICAgICBcbm5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIik7XG4gICAgdGhpcy5teUJlYWNvbkRldGVjdG9yPW5ldyBCZWFjb25EZXRlY3RvcigpO1xuICAgIHRoaXMubXlCZWFjb25EZXRlY3Rvci5zdGFydCgpO1xuXG4gICAgfVxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwibmdPbkRlc3Ryb3lcIik7ICBcbiAgICB0aGlzLm15QmVhY29uRGV0ZWN0b3Iuc3RvcCgpOyAgXG4gICAgfVxufVxuIl19