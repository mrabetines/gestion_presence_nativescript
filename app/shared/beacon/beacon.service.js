"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var nativescript_ibeacon_common_1 = require("nativescript-ibeacon/nativescript-ibeacon.common");
require("rxjs/add/operator/map");
var application_settings_1 = require("application-settings");
var config_1 = require("../../shared/config");
var BeaconService = (function () {
    function BeaconService(http) {
        this.apiUrl = config_1.Config.apiUrl;
        this.http = http;
    }
    BeaconService.prototype.getListBeacons = function () {
        console.log("i am in getListBeacons method ...!!");
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + application_settings_1.getString("token", "none"));
        return this.http.get(this.apiUrl + "beacons", { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var beaconsList = [];
            data.result.forEach(function (beacon) {
                beaconsList.push({ 'beacon': new nativescript_ibeacon_common_1.Beacon(beacon.uuid, beacon.major, beacon.minor), 'id_beacon': beacon.id_Beacon });
            });
            return beaconsList;
        })
            .catch(this.handleErrors);
    };
    BeaconService.prototype.handleErrors = function (error) {
        //console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return BeaconService;
}());
BeaconService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BeaconService);
exports.BeaconService = BeaconService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZWFjb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGdHQUEwRTtBQUMxRSxpQ0FBK0I7QUFDL0IsNkRBQWlEO0FBQ2pELDhDQUEyQztBQUczQyxJQUFhLGFBQWE7SUFHdEIsdUJBQVksSUFBUztRQUZyQixXQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQztRQUdyQixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTCxzQ0FBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1FBQ2xELElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFDLGdDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzNELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07Z0JBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxvQ0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZILENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFQSxvQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN6Qiw0Q0FBNEM7UUFDNUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBSVEsV0FBSTtHQUhaLGFBQWEsQ0EyQnpCO0FBM0JZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IEJlYWNvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtaWJlYWNvbi9uYXRpdmVzY3JpcHQtaWJlYWNvbi5jb21tb25cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJlYWNvblNlcnZpY2Uge1xyXG4gICAgYXBpVXJsID0gQ29uZmlnLmFwaVVybDtcclxuICAgIGh0dHA6SHR0cDtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6SHR0cCkge1xyXG4gICAgICB0aGlzLmh0dHA9aHR0cDsgXHJcbiAgICAgICAgfVxyXG4gICBcclxuICAgIGdldExpc3RCZWFjb25zKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBpbiBnZXRMaXN0QmVhY29ucyBtZXRob2QgLi4uISFcIilcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiK2dldFN0cmluZyhcInRva2VuXCIsIFwibm9uZVwiKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlVcmwgKyBcImJlYWNvbnNcIix7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmVhY29uc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGRhdGEucmVzdWx0LmZvckVhY2goKGJlYWNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlYWNvbnNMaXN0LnB1c2goeyAnYmVhY29uJzogbmV3IEJlYWNvbihiZWFjb24udXVpZCwgYmVhY29uLm1ham9yLCBiZWFjb24ubWlub3IpLCAnaWRfYmVhY29uJzogYmVhY29uLmlkX0JlYWNvbiB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJlYWNvbnNMaXN0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==