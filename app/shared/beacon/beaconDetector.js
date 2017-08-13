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
        this.presenceService.markPresence(parseInt(region.identifier), application_settings_1.getNumber("id", 0)).subscribe(function () { console.log("marked present"); }, function (error) {
            console.log("ERROR: ");
        });
    };
    BeaconDetector.prototype.didExitRegion = function (region) {
        console.log('Did leave Region ' + region.identifier);
    };
    return BeaconDetector;
}(observable_1.Observable));
exports.BeaconDetector = BeaconDetector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uRGV0ZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZWFjb25EZXRlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxnR0FBdU07QUFDdk0sNkRBQTJEO0FBRzNELDZEQUFpRDtBQUdqRDtJQUFvQyxrQ0FBVTtJQVkxQyx3QkFBWSxhQUE0QixFQUFDLGVBQWdDO1FBQXpFLFlBQ0ksaUJBQU8sU0FxQlY7UUE5Qk8sYUFBTyxHQUF3QixFQUFFLENBQUM7UUFVdEMsS0FBSSxDQUFDLGFBQWEsR0FBQyxhQUFhLENBQUM7UUFDakMsS0FBSSxDQUFDLGVBQWUsR0FBQyxlQUFlLENBQUM7UUFFdEM7bUVBQzJEO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sR0FBMEI7WUFDakMsb0JBQW9CLEVBQUUsOERBQWdDLENBQUMsTUFBTTtZQUM3RCx3QkFBd0IsRUFBRSxrRUFBb0MsQ0FBQyxNQUFNO1lBQ3JFLCtCQUErQixFQUFFLDRCQUE0QjtTQUNoRSxDQUFDO1FBQ0YsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksMENBQW1CLENBQUMsS0FBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNyRCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDBDQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENB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Q0FBQyxBQS9GRCxDQUFvQyx1QkFBVSxHQStGN0M7QUEvRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQmVhY29uUmVnaW9uLCBCZWFjb24sIEJlYWNvbkNhbGxiYWNrLCBCZWFjb25Mb2NhdGlvbk9wdGlvbnMsIEJlYWNvbkxvY2F0aW9uT3B0aW9uc0lPU0F1dGhUeXBlLCBCZWFjb25Mb2NhdGlvbk9wdGlvbnNBbmRyb2lkQXV0aFR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWliZWFjb24vbmF0aXZlc2NyaXB0LWliZWFjb24uY29tbW9uXCI7XHJcbmltcG9ydCB7IE5hdGl2ZXNjcmlwdEliZWFjb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWliZWFjb25cIjtcclxuaW1wb3J0IHsgQmVhY29uU2VydmljZSB9IGZyb20gXCIuL2JlYWNvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFByZXNlbmNlU2VydmljZSB9IGZyb20gXCIuLi9wcmVzZW5jZS9wcmVzZW5jZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldE51bWJlciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCZWFjb25EZXRlY3RvciBleHRlbmRzIE9ic2VydmFibGUgaW1wbGVtZW50cyBCZWFjb25DYWxsYmFjayB7XHJcblxyXG4gICAgcHJpdmF0ZSBuYXRpdmVzY3JpcHRJYmVhY29uOiBOYXRpdmVzY3JpcHRJYmVhY29uO1xyXG5cclxuICAgIHByaXZhdGUgcmVnaW9uczogQXJyYXk8QmVhY29uUmVnaW9uPiA9IFtdO1xyXG5cclxuICAgIGJlYWNvblNlcnZpY2U6IEJlYWNvblNlcnZpY2U7XHJcblxyXG4gICAgcHJlc2VuY2VTZXJ2aWNlOiBQcmVzZW5jZVNlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpZF9yZWdpb246IG51bWJlcjtcclxuICAgICBcclxuICAgIGNvbnN0cnVjdG9yKGJlYWNvblNlcnZpY2U6IEJlYWNvblNlcnZpY2UscHJlc2VuY2VTZXJ2aWNlOiBQcmVzZW5jZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYmVhY29uU2VydmljZT1iZWFjb25TZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucHJlc2VuY2VTZXJ2aWNlPXByZXNlbmNlU2VydmljZTtcclxuICAgICAgICBcclxuICAgICAgIC8qIHRoaXMuYmVhY29uU2VydmljZSA9IEFwcEluamVjdG9yLmdldChCZWFjb25TZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnByZXNlbmNlU2VydmljZSA9IEFwcEluamVjdG9yLmdldChQcmVzZW5jZVNlcnZpY2UpOyovXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbnN0cnVjdG9yIG9mIEJlYWNvbkRldGVjdG9yJyk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IEJlYWNvbkxvY2F0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaU9TQXV0aG9yaXNhdGlvblR5cGU6IEJlYWNvbkxvY2F0aW9uT3B0aW9uc0lPU0F1dGhUeXBlLkFsd2F5cyxcclxuICAgICAgICAgICAgYW5kcm9pZEF1dGhvcmlzYXRpb25UeXBlOiBCZWFjb25Mb2NhdGlvbk9wdGlvbnNBbmRyb2lkQXV0aFR5cGUuQ29hcnNlLFxyXG4gICAgICAgICAgICBhbmRyb2lkQXV0aG9yaXNhdGlvbkRlc2NyaXB0aW9uOiBcIkxvY2F0aW9uIHBlcm1pc3Npb24gbmVlZGVkXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbiA9IG5ldyBOYXRpdmVzY3JpcHRJYmVhY29uKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYmVhY29uU2VydmljZS5nZXRMaXN0QmVhY29ucygpLnN1YnNjcmliZShiZWFjb25zTGlzdCA9PiB7XHJcbiAgICAgICAgICAgIGJlYWNvbnNMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdG9yXCIgKyBpdGVtLmlkX2JlYWNvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbnMucHVzaChuZXcgQmVhY29uUmVnaW9uKGl0ZW0uaWRfYmVhY29uLnRvU3RyaW5nKCksIGl0ZW0uYmVhY29uLnByb3hpbWl0eVVVSUQsIGl0ZW0uYmVhY29uLm1ham9yLCBpdGVtLmJlYWNvbi5taW5vcikpO1xyXG4gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIGdldElkUmVnaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkX3JlZ2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbi5pc0F1dGhvcmlzZWQoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBBdXRob3Jpc2VkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24ucmVxdWVzdEF1dGhvcml6YXRpb24oKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aG9yaXNlZCBieSB0aGUgdXNlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uYmluZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRob3Jpc2F0aW9uIGRlbmllZCBieSB0aGUgdXNlclwiKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGF1dGhvcmlzZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbi5iaW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbi5zdG9wTW9uaXRvcmluZyhyZWdpb24pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24udW5iaW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CZWFjb25NYW5hZ2VyUmVhZHkoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkJlYWNvbk1hbmFnZXJSZWFkeVwiKTtcclxuICAgICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uc3RhcnRNb25pdG9yaW5nKHJlZ2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuaWRfcmVnaW9uID0gcGFyc2VJbnQocmVnaW9uLmlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uQmVhY29uTWFuYWdlclJlYWR5XCIgKyByZWdpb24uaWRlbnRpZmllcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlkUmFuZ2VCZWFjb25zSW5SZWdpb24ocmVnaW9uOiBCZWFjb25SZWdpb24sIGJlYWNvbnM6IEJlYWNvbltdKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpZEZhaWxSYW5naW5nQmVhY29uc0luUmVnaW9uKHJlZ2lvbjogQmVhY29uUmVnaW9uLCBlcnJvckNvZGU6IG51bWJlciwgZXJyb3JEZXNjcmlwdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRpZEVudGVyUmVnaW9uKHJlZ2lvbjogQmVhY29uUmVnaW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBlbnRlciBSZWdpb24gJyArIHJlZ2lvbi5pZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLnByZXNlbmNlU2VydmljZS5tYXJrUHJlc2VuY2UocGFyc2VJbnQocmVnaW9uLmlkZW50aWZpZXIpLGdldE51bWJlcihcImlkXCIsIDApLCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKFwibWFya2VkIHByZXNlbnRcIikgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7IC8vYWxlcnQoXCJlcnJvciBoYXMgb2NjdXJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBcIik7IH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGlkRXhpdFJlZ2lvbihyZWdpb246IEJlYWNvblJlZ2lvbikgeyBcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlkIGxlYXZlIFJlZ2lvbiAnICsgcmVnaW9uLmlkZW50aWZpZXIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==