"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_ibeacon_common_1 = require("nativescript-ibeacon/nativescript-ibeacon.common");
var nativescript_ibeacon_1 = require("nativescript-ibeacon");
var BeaconDetector = (function (_super) {
    __extends(BeaconDetector, _super);
    function BeaconDetector() {
        var _this = _super.call(this) || this;
        _this.region = null;
        console.log('Constructor of BeaconDetector');
        _this.mytext = "let's try our beacons";
        var options = {
            iOSAuthorisationType: nativescript_ibeacon_common_1.BeaconLocationOptionsIOSAuthType.Always,
            androidAuthorisationType: nativescript_ibeacon_common_1.BeaconLocationOptionsAndroidAuthType.Coarse,
            androidAuthorisationDescription: "Location permission needed"
        };
        _this.nativescriptIbeacon = new nativescript_ibeacon_1.NativescriptIbeacon(_this, options);
        _this.region = new nativescript_ibeacon_common_1.BeaconRegion("HelloID", "B9407F30-F5F8-466E-AFF9-25556B57FE6D");
        return _this;
    }
    BeaconDetector.prototype.start = function () {
        var _this = this;
        this.mytext = "Starting .....";
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
        this.mytext = "Stopping .....";
        this.nativescriptIbeacon.stopMonitoring(this.region);
        this.nativescriptIbeacon.unbind();
    };
    BeaconDetector.prototype.onBeaconManagerReady = function () {
        console.log("onBeaconManagerReady");
        this.nativescriptIbeacon.startMonitoring(this.region);
    };
    BeaconDetector.prototype.didRangeBeaconsInRegion = function (region, beacons) {
    };
    BeaconDetector.prototype.didFailRangingBeaconsInRegion = function (region, errorCode, errorDescription) {
    };
    BeaconDetector.prototype.didEnterRegion = function (region) {
        this.mytext = "i have detected a beacon youpiiiiiiiiiii";
        console.log('Did enter Region ' + region.identifier);
    };
    BeaconDetector.prototype.didExitRegion = function (region) {
        this.mytext = "i exited the region :'(";
        console.log('Did leave Region ' + region.identifier);
    };
    return BeaconDetector;
}(observable_1.Observable));
exports.BeaconDetector = BeaconDetector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uRGV0ZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZWFjb25EZXRlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUEyQztBQUMzQyxnR0FBb007QUFDcE0sNkRBQXlEO0FBRXpEO0lBQW9DLGtDQUFVO0lBUTFDO1FBQUEsWUFDSSxpQkFBTyxTQVlWO1FBZk8sWUFBTSxHQUFpQixJQUFJLENBQUM7UUFLaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzdDLEtBQUksQ0FBQyxNQUFNLEdBQUMsdUJBQXVCLENBQUM7UUFDcEMsSUFBSSxPQUFPLEdBQTBCO1lBQ2pDLG9CQUFvQixFQUFFLDhEQUFnQyxDQUFDLE1BQU07WUFDN0Qsd0JBQXdCLEVBQUUsa0VBQW9DLENBQUMsTUFBTTtZQUNyRSwrQkFBK0IsRUFBRSw0QkFBNEI7U0FDaEUsQ0FBQztRQUNGLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLDBDQUFtQixDQUFDLEtBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMENBQVksQ0FBQyxTQUFTLEVBQUUsc0NBQXNDLENBQUMsQ0FBQzs7SUFFdEYsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLE1BQU0sR0FBRSxnQkFBZ0IsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRTtpQkFDMUMsSUFBSSxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRXBDLENBQUMsRUFBRSxVQUFDLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0lBRUwsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNkNBQW9CLEdBQXBCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxnREFBdUIsR0FBdkIsVUFBd0IsTUFBb0IsRUFBRSxPQUFpQjtJQUUvRCxDQUFDO0lBRUQsc0RBQTZCLEdBQTdCLFVBQThCLE1BQW9CLEVBQUUsU0FBaUIsRUFBRSxnQkFBd0I7SUFFL0YsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxNQUFvQjtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFDLDBDQUEwQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsTUFBb0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBQyx5QkFBeUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBdkVELENBQW9DLHVCQUFVLEdBdUU3QztBQXZFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWFjb25SZWdpb24sIEJlYWNvbiwgQmVhY29uQ2FsbGJhY2ssQmVhY29uTG9jYXRpb25PcHRpb25zLCBCZWFjb25Mb2NhdGlvbk9wdGlvbnNJT1NBdXRoVHlwZSwgQmVhY29uTG9jYXRpb25PcHRpb25zQW5kcm9pZEF1dGhUeXBlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWliZWFjb24vbmF0aXZlc2NyaXB0LWliZWFjb24uY29tbW9uXCI7XHJcbmltcG9ydCB7TmF0aXZlc2NyaXB0SWJlYWNvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1pYmVhY29uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVhY29uRGV0ZWN0b3IgZXh0ZW5kcyBPYnNlcnZhYmxlIGltcGxlbWVudHMgQmVhY29uQ2FsbGJhY2sge1xyXG5cclxuICAgIHByaXZhdGUgbmF0aXZlc2NyaXB0SWJlYWNvbjogTmF0aXZlc2NyaXB0SWJlYWNvbjtcclxuXHJcbiAgICBwdWJsaWMgbXl0ZXh0OiBzdHJpbmcgO1xyXG5cclxuICAgIHByaXZhdGUgcmVnaW9uOiBCZWFjb25SZWdpb24gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25zdHJ1Y3RvciBvZiBCZWFjb25EZXRlY3RvcicpO1xyXG4gICAgICAgIHRoaXMubXl0ZXh0PVwibGV0J3MgdHJ5IG91ciBiZWFjb25zXCI7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IEJlYWNvbkxvY2F0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaU9TQXV0aG9yaXNhdGlvblR5cGU6IEJlYWNvbkxvY2F0aW9uT3B0aW9uc0lPU0F1dGhUeXBlLkFsd2F5cyxcclxuICAgICAgICAgICAgYW5kcm9pZEF1dGhvcmlzYXRpb25UeXBlOiBCZWFjb25Mb2NhdGlvbk9wdGlvbnNBbmRyb2lkQXV0aFR5cGUuQ29hcnNlLFxyXG4gICAgICAgICAgICBhbmRyb2lkQXV0aG9yaXNhdGlvbkRlc2NyaXB0aW9uOiBcIkxvY2F0aW9uIHBlcm1pc3Npb24gbmVlZGVkXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbiA9IG5ldyBOYXRpdmVzY3JpcHRJYmVhY29uKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucmVnaW9uID0gbmV3IEJlYWNvblJlZ2lvbihcIkhlbGxvSURcIiwgXCJCOTQwN0YzMC1GNUY4LTQ2NkUtQUZGOS0yNTU1NkI1N0ZFNkRcIik7XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubXl0ZXh0ID1cIlN0YXJ0aW5nIC4uLi4uXCI7XHJcbiAgICAgICAgaWYgKCF0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uaXNBdXRob3Jpc2VkKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOT1QgQXV0aG9yaXNlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLnJlcXVlc3RBdXRob3JpemF0aW9uKClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhvcmlzZWQgYnkgdGhlIHVzZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVzY3JpcHRJYmVhY29uLmJpbmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aG9yaXNhdGlvbiBkZW5pZWQgYnkgdGhlIHVzZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBhdXRob3Jpc2VkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uYmluZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLm15dGV4dCA9IFwiU3RvcHBpbmcgLi4uLi5cIjtcclxuICAgICAgICB0aGlzLm5hdGl2ZXNjcmlwdEliZWFjb24uc3RvcE1vbml0b3JpbmcodGhpcy5yZWdpb24pO1xyXG4gICAgICAgIHRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbi51bmJpbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJlYWNvbk1hbmFnZXJSZWFkeSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQmVhY29uTWFuYWdlclJlYWR5XCIpO1xyXG4gICAgICAgIHRoaXMubmF0aXZlc2NyaXB0SWJlYWNvbi5zdGFydE1vbml0b3JpbmcodGhpcy5yZWdpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpZFJhbmdlQmVhY29uc0luUmVnaW9uKHJlZ2lvbjogQmVhY29uUmVnaW9uLCBiZWFjb25zOiBCZWFjb25bXSk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRpZEZhaWxSYW5naW5nQmVhY29uc0luUmVnaW9uKHJlZ2lvbjogQmVhY29uUmVnaW9uLCBlcnJvckNvZGU6IG51bWJlciwgZXJyb3JEZXNjcmlwdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBkaWRFbnRlclJlZ2lvbihyZWdpb246IEJlYWNvblJlZ2lvbikge1xyXG4gICAgICAgIHRoaXMubXl0ZXh0PVwiaSBoYXZlIGRldGVjdGVkIGEgYmVhY29uIHlvdXBpaWlpaWlpaWlpaVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEaWQgZW50ZXIgUmVnaW9uICcgKyByZWdpb24uaWRlbnRpZmllcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGlkRXhpdFJlZ2lvbihyZWdpb246IEJlYWNvblJlZ2lvbikge1xyXG4gICAgICAgIHRoaXMubXl0ZXh0PVwiaSBleGl0ZWQgdGhlIHJlZ2lvbiA6JyhcIjsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RpZCBsZWF2ZSBSZWdpb24gJyAgKyByZWdpb24uaWRlbnRpZmllcik7XHJcbiAgICB9XHJcblxyXG59Il19