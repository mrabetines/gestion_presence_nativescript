"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_ibeacon_common_1 = require("nativescript-ibeacon/nativescript-ibeacon.common");
var nativescript_ibeacon_1 = require("nativescript-ibeacon");
var application_settings_1 = require("application-settings");
var BeaconDetector = (function (_super) {
    __extends(BeaconDetector, _super);
    function BeaconDetector(beaconService, presenceService) {
        var _this = _super.call(this) || this;
        _this.regions = [];
        _this.beaconService = beaconService;
        _this.presenceService = presenceService;
        /* this.beaconService = AppInjector.get(BeaconService);
         this.presenceService = AppInjector.get(PresenceService);*/
        console.log('Constructor of BeaconDetector');
        var options = {
            iOSAuthorisationType: nativescript_ibeacon_common_1.BeaconLocationOptionsIOSAuthType.Always,
            androidAuthorisationType: nativescript_ibeacon_common_1.BeaconLocationOptionsAndroidAuthType.Coarse,
            androidAuthorisationDescription: "Location permission needed"
        };
        _this.nativescriptIbeacon = new nativescript_ibeacon_1.NativescriptIbeacon(_this, options);
        _this.beaconService.getListBeacons().subscribe(function (beaconsList) {
            beaconsList.forEach(function (item) {
                console.log("constructor" + item.id_beacon);
                _this.regions.push(new nativescript_ibeacon_common_1.BeaconRegion(item.id_beacon.toString(), item.beacon.proximityUUID, item.beacon.major, item.beacon.minor));
            });
            _this.start();
        });
        return _this;
    }
    BeaconDetector.prototype.getIdRegion = function () {
        return this.id_region;
    };
    BeaconDetector.prototype.start = function () {
        var _this = this;
        if (!this.nativescriptIbeacon.isAuthorised()) {
            console.log("NOT Authorised");
            this.nativescriptIbeacon.requestAuthorization()
                .then(function () {
                console.log("Authorised by the user");
                _this.nativescriptIbeacon.bind();
            }, function (e) {
                console.log("Authorisation denied by the user");
            });
        }
        else {
            console.log("Already authorised");
            this.nativescriptIbeacon.bind();
        }
    };
    BeaconDetector.prototype.stop = function () {
        var _this = this;
        this.regions.forEach(function (region) {
            _this.nativescriptIbeacon.stopMonitoring(region);
        });
        this.nativescriptIbeacon.unbind();
    };
    BeaconDetector.prototype.onBeaconManagerReady = function () {
        var _this = this;
        console.log("onBeaconManagerReady");
        this.regions.forEach(function (region) {
            _this.nativescriptIbeacon.startMonitoring(region);
            _this.id_region = parseInt(region.identifier);
            console.log("onBeaconManagerReady" + region.identifier);
        });
    };
    BeaconDetector.prototype.didRangeBeaconsInRegion = function (region, beacons) {
    };
    BeaconDetector.prototype.didFailRangingBeaconsInRegion = function (region, errorCode, errorDescription) {
    };
    BeaconDetector.prototype.didEnterRegion = function (region) {
        console.log('Did enter Region ' + region.identifier);
        //récupérer la date 
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var date = yyyy + '-' + mm + '-' + dd;
        this.presenceService.markPresence(parseInt(region.identifier), date, application_settings_1.getNumber("id", 0)).subscribe(function () { console.log("marked present"); }, function (error) {
            console.log("ERROR: ");
        });
    };
    BeaconDetector.prototype.didExitRegion = function (region) {
        console.log('Did leave Region ' + region.identifier);
    };
    return BeaconDetector;
}(observable_1.Observable));
exports.BeaconDetector = BeaconDetector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uRGV0ZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZWFjb25EZXRlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxnR0FBdU07QUFDdk0sNkRBQTJEO0FBRzNELDZEQUFpRDtBQUdqRDtJQUFvQyxrQ0FBVTtJQVkxQyx3QkFBWSxhQUE0QixFQUFDLGVBQWdDO1FBQXpFLFlBQ0ksaUJBQU8sU0FxQlY7UUE5Qk8sYUFBTyxHQUF3QixFQUFFLENBQUM7UUFVdEMsS0FBSSxDQUFDLGFBQWEsR0FBQyxhQUFhLENBQUM7UUFDakMsS0FBSSxDQUFDLGVBQWUsR0FBQyxlQUFlLENBQUM7UUFFdEM7bUVBQzJEO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sR0FBMEI7WUFDakMsb0JBQW9CLEVBQUUsOERBQWdDLENBQUMsTUFBTTtZQUM3RCx3QkFBd0IsRUFBRSxrRUFBb0MsQ0FBQyxNQUFNO1lBQ3JFLCtCQUErQixFQUFFLDRCQUE0QjtTQUNoRSxDQUFDO1FBQ0YsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksMENBQW1CLENBQUMsS0FBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNyRCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENB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LENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDNUYsY0FBUSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQ3ZDLFVBQUMsS0FBSztZQUNRLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFBQyxDQUFDLENBQzFDLENBQUE7SUFDTCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE1BQW9CO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUF0R0QsQ0FBb0MsdUJBQVUsR0FzRzdDO0FBdEdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEJlYWNvblJlZ2lvbiwgQmVhY29uLCBCZWFjb25DYWxsYmFjaywgQmVhY29uTG9jYXRpb25PcHRpb25zLCBCZWFjb25Mb2NhdGlvbk9wdGlvbnNJT1NBdXRoVHlwZSwgQmVhY29uTG9jYXRpb25PcHRpb25zQW5kcm9pZEF1dGhUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1pYmVhY29uL25hdGl2ZXNjcmlwdC1pYmVhY29uLmNvbW1vblwiO1xyXG5pbXBvcnQgeyBOYXRpdmVzY3JpcHRJYmVhY29uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1pYmVhY29uXCI7XHJcbmltcG9ydCB7IEJlYWNvblNlcnZpY2UgfSBmcm9tIFwiLi9iZWFjb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcmVzZW5jZVNlcnZpY2UgfSBmcm9tIFwiLi4vcHJlc2VuY2UvcHJlc2VuY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXROdW1iZXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmVhY29uRGV0ZWN0b3IgZXh0ZW5kcyBPYnNlcnZhYmxlIGltcGxlbWVudHMgQmVhY29uQ2FsbGJhY2sge1xyXG5cclxuICAgIHByaXZhdGUgbmF0aXZlc2NyaXB0SWJlYWNvbjogTmF0aXZlc2NyaXB0SWJlYWNvbjtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lvbnM6IEFycmF5PEJlYWNvblJlZ2lvbj4gPSBbXTtcclxuXHJcbiAgICBiZWFjb25TZXJ2aWNlOiBCZWFjb25TZXJ2aWNlO1xyXG5cclxuICAgIHByZXNlbmNlU2VydmljZTogUHJlc2VuY2VTZXJ2aWNlO1xyXG5cclxuICAgIHByaXZhdGUgaWRfcmVnaW9uOiBudW1iZXI7XHJcbiAgICAgXHJcbiAgICBjb25zdHJ1Y3RvcihiZWFjb25TZXJ2aWNlOiBCZWFjb25TZXJ2aWNlLHByZXNlbmNlU2VydmljZTogUHJlc2VuY2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJlYWNvblNlcnZpY2U9YmVhY29uU2VydmljZTtcclxuICAgICAgICB0aGlzLnByZXNlbmNlU2VydmljZT1wcmVzZW5jZVNlcnZpY2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAvKiB0aGlzLmJlYWNvblNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoQmVhY29uU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5wcmVzZW5jZVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoUHJlc2VuY2VTZXJ2aWNlKTsqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25zdHJ1Y3RvciBvZiBCZWFjb25EZXRlY3RvcicpO1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBCZWFjb25Mb2NhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGlPU0F1dGhvcmlzYXRpb25UeXBlOiBCZWFjb25Mb2NhdGlvbk9wdGlvbnNJT1NBdXRoVHlwZS5BbHdheXMsXHJcbiAgICAgICAgICAgIGFuZHJvaWRBdXRob3Jpc2F0aW9uVHlwZTogQmVhY29uTG9jYXRpb25PcHRpb25zQW5kcm9pZEF1dGhUeXBlLkNvYXJzZSxcclxuICAgICAgICAgICAgYW5kcm9pZEF1dGhvcmlzYXRpb25EZXNjcmlwdGlvbjogXCJMb2NhdGlvbiBwZXJtaXNzaW9uIG5lZWRlZFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24gPSBuZXcgTmF0aXZlc2NyaXB0SWJlYWNvbih0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmJlYWNvblNlcnZpY2UuZ2V0TGlzdEJlYWNvbnMoKS5zdWJzY3JpYmUoYmVhY29uc0xpc3QgPT4ge1xyXG4gICAgICAgICAgICBiZWFjb25zTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RvclwiICsgaXRlbS5pZF9iZWFjb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb25zLnB1c2gobmV3IEJlYWNvblJlZ2lvbihpdGVtLmlkX2JlYWNvbi50b1N0cmluZygpLCBpdGVtLmJlYWNvbi5wcm94aW1pdHlVVUlELCBpdGVtLmJlYWNvbi5tYWpvciwgaXRlbS5iZWFjb24ubWlub3IpKTtcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRJZFJlZ2lvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZF9yZWdpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uaXNBdXRob3Jpc2VkKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT1QgQXV0aG9yaXNlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLnJlcXVlc3RBdXRob3JpemF0aW9uKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhvcmlzZWQgYnkgdGhlIHVzZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLmJpbmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aG9yaXNhdGlvbiBkZW5pZWQgYnkgdGhlIHVzZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBhdXRob3Jpc2VkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uYmluZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uc3RvcE1vbml0b3JpbmcocmVnaW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLnVuYmluZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmVhY29uTWFuYWdlclJlYWR5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25CZWFjb25NYW5hZ2VyUmVhZHlcIik7XHJcbiAgICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLnN0YXJ0TW9uaXRvcmluZyhyZWdpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmlkX3JlZ2lvbiA9IHBhcnNlSW50KHJlZ2lvbi5pZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbkJlYWNvbk1hbmFnZXJSZWFkeVwiICsgcmVnaW9uLmlkZW50aWZpZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpZFJhbmdlQmVhY29uc0luUmVnaW9uKHJlZ2lvbjogQmVhY29uUmVnaW9uLCBiZWFjb25zOiBCZWFjb25bXSk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaWRGYWlsUmFuZ2luZ0JlYWNvbnNJblJlZ2lvbihyZWdpb246IEJlYWNvblJlZ2lvbiwgZXJyb3JDb2RlOiBudW1iZXIsIGVycm9yRGVzY3JpcHRpb246IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkaWRFbnRlclJlZ2lvbihyZWdpb246IEJlYWNvblJlZ2lvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEaWQgZW50ZXIgUmVnaW9uICcgKyByZWdpb24uaWRlbnRpZmllcik7XHJcbiAgICAgICAgLy9yw6ljdXDDqXJlciBsYSBkYXRlIFxyXG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkrMTtcclxuICAgICAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7IFxyXG4gICAgICAgIGxldCBkYXRlID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XHJcblxyXG4gICAgICAgIHRoaXMucHJlc2VuY2VTZXJ2aWNlLm1hcmtQcmVzZW5jZShwYXJzZUludChyZWdpb24uaWRlbnRpZmllciksZGF0ZSxnZXROdW1iZXIoXCJpZFwiLCAwKSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKFwibWFya2VkIHByZXNlbnRcIikgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7IC8vYWxlcnQoXCJlcnJvciBoYXMgb2NjdXJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIik7IH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGlkRXhpdFJlZ2lvbihyZWdpb246IEJlYWNvblJlZ2lvbikgeyBcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIGxlYXZlIFJlZ2lvbiAnICsgcmVnaW9uLmlkZW50aWZpZXIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==