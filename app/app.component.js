"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PushNotifications = require("nativescript-push-notifications");
var config_1 = require("./shared/config");
var AppComponent = (function () {
    function AppComponent() {
        //settings for the push notification 
        var settings = {
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
            notificationCallbackIOS: function (data) {
                console.log("DATA: " + JSON.stringify(data));
            },
            notificationCallbackAndroid: function (message, data, notification) {
                console.log("MESSAGE: " + JSON.stringify(message));
                console.log("DATA: " + JSON.stringify(data));
                console.log("NOTIFICATION: " + JSON.stringify(notification));
                alert(message);
            }
        };
        //register for push notif 
        PushNotifications.register(settings, function (data) {
            console.log("REGISTRATION ID: " + JSON.stringify(data));
            //console.log(data);
            exports.Token = data;
            PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
        }, function (error) {
            console.log(error);
        });
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsbUVBQXFFO0FBRXJFLDBDQUF1QztBQVF2QyxJQUFhLFlBQVk7SUFFckI7UUFFSSxxQ0FBcUM7UUFDckMsSUFBSSxRQUFRLEdBQUc7WUFDWCxhQUFhO1lBQ2IsUUFBUSxFQUFFLGVBQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVM7WUFDVCxLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxtQkFBbUIsRUFBRTtnQkFDakIsT0FBTyxFQUFFLENBQUM7d0JBQ04sVUFBVSxFQUFFLGlCQUFpQjt3QkFDN0IsS0FBSyxFQUFFLE1BQU07d0JBQ2IsY0FBYyxFQUFFLFlBQVk7d0JBQzVCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixzQkFBc0IsRUFBRSxJQUFJO3FCQUMvQixFQUFFO3dCQUNDLFVBQVUsRUFBRSxtQkFBbUI7d0JBQy9CLEtBQUssRUFBRSxRQUFRO3dCQUNmLGNBQWMsRUFBRSxZQUFZO3dCQUM1QixXQUFXLEVBQUUsSUFBSTt3QkFDakIsc0JBQXNCLEVBQUUsSUFBSTtxQkFDL0IsQ0FBQztnQkFDRixVQUFVLEVBQUUsQ0FBQzt3QkFDVCxVQUFVLEVBQUUsZUFBZTt3QkFDM0Isd0JBQXdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQzt3QkFDbEUsd0JBQXdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztxQkFDckUsQ0FBQzthQUNMO1lBQ0QsdUJBQXVCLEVBQUUsVUFBQSxJQUFJO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUNELDJCQUEyQixFQUFFLFVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZO2dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzdELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVuQixDQUFDO1NBQ0osQ0FBQztRQUNGLDBCQUEwQjtRQUMxQixpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFVBQUEsSUFBSTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RCxvQkFBb0I7WUFDcEIsYUFBSyxHQUFHLElBQUksQ0FBQztZQUNiLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzlFLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdMLG1CQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0JBQW9CO0tBRXBDLENBQUM7O0dBRVcsWUFBWSxDQXVEeEI7QUF2RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBQdXNoTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LXB1c2gtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuL3NoYXJlZC9jb25maWdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gIFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAgeyBcbiAgICAgXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgLy9zZXR0aW5ncyBmb3IgdGhlIHB1c2ggbm90aWZpY2F0aW9uIFxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAvL2ZvciBhbmRyb2lkXG4gICAgICAgICAgICBzZW5kZXJJRDogQ29uZmlnLnNlbmRlcklELFxuICAgICAgICAgICAgLy9mb3IgaW9zXG4gICAgICAgICAgICBiYWRnZTogdHJ1ZSxcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxuICAgICAgICAgICAgYWxlcnQ6IHRydWUsXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZVNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpZmllcjogJ1JFQURfSURFTlRJRklFUicsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnQ0FOQ0VMX0lERU5USUZJRVInLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRpb25Nb2RlOiBcImZvcmVncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJ1Y3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiAnUkVBRF9DQVRFR09SWScsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNGb3JEZWZhdWx0Q29udGV4dDogWydSRUFEX0lERU5USUZJRVInLCAnQ0FOQ0VMX0lERU5USUZJRVInXSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uc0Zvck1pbmltYWxDb250ZXh0OiBbJ1JFQURfSURFTlRJRklFUicsICdDQU5DRUxfSURFTlRJRklFUiddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0lPUzogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQVRBOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub3RpZmljYXRpb25DYWxsYmFja0FuZHJvaWQ6IChtZXNzYWdlLCBkYXRhLCBub3RpZmljYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1FU1NBR0U6IFwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREFUQTogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT1RJRklDQVRJT046IFwiICsgSlNPTi5zdHJpbmdpZnkobm90aWZpY2F0aW9uKSk7XG4gICAgICAgICAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvL3JlZ2lzdGVyIGZvciBwdXNoIG5vdGlmIFxuICAgICAgICBQdXNoTm90aWZpY2F0aW9ucy5yZWdpc3RlcihzZXR0aW5ncywgZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFR0lTVFJBVElPTiBJRDogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgVG9rZW4gPSBkYXRhO1xuICAgICAgICAgICAgUHVzaE5vdGlmaWNhdGlvbnMub25NZXNzYWdlUmVjZWl2ZWQoc2V0dGluZ3Mubm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuZXhwb3J0IGxldCBUb2tlbjogc3RyaW5nO1xuIl19