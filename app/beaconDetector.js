"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("data/observable");
const nativescript_ibeacon_common_1 = require("nativescript-ibeacon/nativescript-ibeacon.common");
const nativescript_ibeacon_1 = require("nativescript-ibeacon");
class BeaconDetector extends observable_1.Observable {
    constructor(presenceService) {
        super();
        this.regions = [];
        this.presenceService = presenceService;
        console.log('Constructor of BeaconDetector');
        this.mytext = "let's try our beacons";
        let options = {
            iOSAuthorisationType: nativescript_ibeacon_common_1.BeaconLocationOptionsIOSAuthType.Always,
            androidAuthorisationType: nativescript_ibeacon_common_1.BeaconLocationOptionsAndroidAuthType.Coarse,
            androidAuthorisationDescription: "Location permission needed"
        };
        this.nativescriptIbeacon = new nativescript_ibeacon_1.NativescriptIbeacon(this, options);
        //let self=this;
        this.presenceService.getListBeacons().subscribe(beaconsList => {
            //console.log(JSON.stringify(beaconsList.json()));
            beaconsList.forEach(item => {
                console.log("constructor" + item.id_beacon);
                this.regions.push(new nativescript_ibeacon_common_1.BeaconRegion(item.id_beacon.toString(), item.beacon.proximityUUID, item.beacon.major, item.beacon.minor));
            });
            this.start();
        });
    }
    setToken(token) {
        this.token = token;
    }
    start() {
        this.mytext = "Starting .....";
        if (!this.nativescriptIbeacon.isAuthorised()) {
            console.log("NOT Authorised");
            this.nativescriptIbeacon.requestAuthorization()
                .then(() => {
                console.log("Authorised by the user");
                this.nativescriptIbeacon.bind();
            }, (e) => {
                console.log("Authorisation denied by the user");
            });
        }
        else {
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
    onBeaconManagerReady() {
        console.log("onBeaconManagerReady");
        //let self=this;
        this.regions.forEach(region => {
            this.nativescriptIbeacon.startMonitoring(region);
            console.log("onBeaconManagerReady" + region.identifier);
        });
    }
    didRangeBeaconsInRegion(region, beacons) {
    }
    didFailRangingBeaconsInRegion(region, errorCode, errorDescription) {
    }
    didEnterRegion(region) {
        //this.mytext="i have detected a beacon youpiiiiiiiiiii";
        console.log('Did enter Region ' + region.identifier);
        this.presenceService.getData(this.token).subscribe(message => { console.log(message); });
    }
    didExitRegion(region) {
        this.mytext = "i exited the region :'(";
        console.log('Did leave Region ' + region.identifier);
    }
}
exports.BeaconDetector = BeaconDetector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uRGV0ZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZWFjb25EZXRlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUEyQztBQUMzQyxrR0FBb007QUFDcE0sK0RBQXlEO0FBSXpELG9CQUE0QixTQUFRLHVCQUFVO0lBWTFDLFlBQVksZUFBZ0M7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFQSixZQUFPLEdBQXdCLEVBQUUsQ0FBRTtRQVF2QyxJQUFJLENBQUMsZUFBZSxHQUFDLGVBQWUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBQyx1QkFBdUIsQ0FBQztRQUNwQyxJQUFJLE9BQU8sR0FBMEI7WUFDakMsb0JBQW9CLEVBQUUsOERBQWdDLENBQUMsTUFBTTtZQUM3RCx3QkFBd0IsRUFBRSxrRUFBb0MsQ0FBQyxNQUFNO1lBQ3JFLCtCQUErQixFQUFFLDRCQUE0QjtTQUNoRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksMENBQW1CLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQ3ZELGtEQUFrRDtZQUNsRCxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRWpJLENBQUMsQ0FBQyxDQUFBO1lBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZO1FBRWpCLElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRSxnQkFBZ0IsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRTtpQkFDMUMsSUFBSSxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRXBDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBRUwsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDM0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVCQUF1QixDQUFDLE1BQW9CLEVBQUUsT0FBaUI7SUFFL0QsQ0FBQztJQUVELDZCQUE2QixDQUFDLE1BQW9CLEVBQUUsU0FBaUIsRUFBRSxnQkFBd0I7SUFFL0YsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFvQjtRQUMvQix5REFBeUQ7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLE1BQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBb0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBQyx5QkFBeUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBRUo7QUFqR0Qsd0NBaUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQge0JlYWNvblJlZ2lvbiwgQmVhY29uLCBCZWFjb25DYWxsYmFjayxCZWFjb25Mb2NhdGlvbk9wdGlvbnMsIEJlYWNvbkxvY2F0aW9uT3B0aW9uc0lPU0F1dGhUeXBlLCBCZWFjb25Mb2NhdGlvbk9wdGlvbnNBbmRyb2lkQXV0aFR5cGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtaWJlYWNvbi9uYXRpdmVzY3JpcHQtaWJlYWNvbi5jb21tb25cIjtcclxuaW1wb3J0IHtOYXRpdmVzY3JpcHRJYmVhY29ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWliZWFjb25cIjtcclxuaW1wb3J0IHsgUHJlc2VuY2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3ByZXNlbmNlLnNlcnZpY2VcIjtcclxuIFxyXG5cclxuZXhwb3J0IGNsYXNzIEJlYWNvbkRldGVjdG9yIGV4dGVuZHMgT2JzZXJ2YWJsZSBpbXBsZW1lbnRzIEJlYWNvbkNhbGxiYWNrIHtcclxuXHJcbiAgICBwcml2YXRlIG5hdGl2ZXNjcmlwdEliZWFjb246IE5hdGl2ZXNjcmlwdEliZWFjb247XHJcblxyXG4gICAgcHVibGljIG15dGV4dDogc3RyaW5nIDtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lvbnM6IEFycmF5PEJlYWNvblJlZ2lvbj4gPSBbXSA7XHJcblxyXG4gICAgcHJlc2VuY2VTZXJ2aWNlOlByZXNlbmNlU2VydmljZTtcclxuXHJcbiAgICB0b2tlbjpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJlc2VuY2VTZXJ2aWNlOiBQcmVzZW5jZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJlc2VuY2VTZXJ2aWNlPXByZXNlbmNlU2VydmljZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29uc3RydWN0b3Igb2YgQmVhY29uRGV0ZWN0b3InKTtcclxuICAgICAgICB0aGlzLm15dGV4dD1cImxldCdzIHRyeSBvdXIgYmVhY29uc1wiO1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBCZWFjb25Mb2NhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGlPU0F1dGhvcmlzYXRpb25UeXBlOiBCZWFjb25Mb2NhdGlvbk9wdGlvbnNJT1NBdXRoVHlwZS5BbHdheXMsXHJcbiAgICAgICAgICAgIGFuZHJvaWRBdXRob3Jpc2F0aW9uVHlwZTogQmVhY29uTG9jYXRpb25PcHRpb25zQW5kcm9pZEF1dGhUeXBlLkNvYXJzZSxcclxuICAgICAgICAgICAgYW5kcm9pZEF1dGhvcmlzYXRpb25EZXNjcmlwdGlvbjogXCJMb2NhdGlvbiBwZXJtaXNzaW9uIG5lZWRlZFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24gPSBuZXcgTmF0aXZlc2NyaXB0SWJlYWNvbih0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICAvL2xldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgdGhpcy5wcmVzZW5jZVNlcnZpY2UuZ2V0TGlzdEJlYWNvbnMoKS5zdWJzY3JpYmUoYmVhY29uc0xpc3Q9PntcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShiZWFjb25zTGlzdC5qc29uKCkpKTtcclxuICAgICAgICAgICAgYmVhY29uc0xpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RvclwiK2l0ZW0uaWRfYmVhY29uKTsgXHJcbiAgICAgICAgICAgIHRoaXMucmVnaW9ucy5wdXNoKG5ldyBCZWFjb25SZWdpb24oaXRlbS5pZF9iZWFjb24udG9TdHJpbmcoKSxpdGVtLmJlYWNvbi5wcm94aW1pdHlVVUlELGl0ZW0uYmVhY29uLm1ham9yLGl0ZW0uYmVhY29uLm1pbm9yKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb2tlbih0b2tlbjpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50b2tlbj10b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm15dGV4dCA9XCJTdGFydGluZyAuLi4uLlwiO1xyXG4gICAgICAgIGlmICghdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLmlzQXV0aG9yaXNlZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTk9UIEF1dGhvcmlzZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbi5yZXF1ZXN0QXV0aG9yaXphdGlvbigpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRob3Jpc2VkIGJ5IHRoZSB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbi5iaW5kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhvcmlzYXRpb24gZGVuaWVkIGJ5IHRoZSB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgYXV0aG9yaXNlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLmJpbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5teXRleHQgPSBcIlN0b3BwaW5nIC4uLi4uXCI7XHJcbiAgICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcclxuICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uc3RvcE1vbml0b3JpbmcocmVnaW9uKTsgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVhY29uTWFuYWdlclJlYWR5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25CZWFjb25NYW5hZ2VyUmVhZHlcIik7XHJcbiAgICAgICAgLy9sZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XHJcbiAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLnN0YXJ0TW9uaXRvcmluZyhyZWdpb24pOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQmVhY29uTWFuYWdlclJlYWR5XCIrIHJlZ2lvbi5pZGVudGlmaWVyKTsgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGRpZFJhbmdlQmVhY29uc0luUmVnaW9uKHJlZ2lvbjogQmVhY29uUmVnaW9uLCBiZWFjb25zOiBCZWFjb25bXSk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRpZEZhaWxSYW5naW5nQmVhY29uc0luUmVnaW9uKHJlZ2lvbjogQmVhY29uUmVnaW9uLCBlcnJvckNvZGU6IG51bWJlciwgZXJyb3JEZXNjcmlwdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkaWRFbnRlclJlZ2lvbihyZWdpb246IEJlYWNvblJlZ2lvbikge1xyXG4gICAgICAgIC8vdGhpcy5teXRleHQ9XCJpIGhhdmUgZGV0ZWN0ZWQgYSBiZWFjb24geW91cGlpaWlpaWlpaWlpXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBlbnRlciBSZWdpb24gJyArIHJlZ2lvbi5pZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLnByZXNlbmNlU2VydmljZS5nZXREYXRhKHRoaXMudG9rZW4pLnN1YnNjcmliZShtZXNzYWdlPT57Y29uc29sZS5sb2cobWVzc2FnZSk7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlkRXhpdFJlZ2lvbihyZWdpb246IEJlYWNvblJlZ2lvbikge1xyXG4gICAgICAgIHRoaXMubXl0ZXh0PVwiaSBleGl0ZWQgdGhlIHJlZ2lvbiA6JyhcIjsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBsZWF2ZSBSZWdpb24gJyAgKyByZWdpb24uaWRlbnRpZmllcik7XHJcbiAgICB9XHJcblxyXG59Il19