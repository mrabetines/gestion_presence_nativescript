"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
const nativescript_ibeacon_common_1 = require("nativescript-ibeacon/nativescript-ibeacon.common");
require("rxjs/add/operator/map");
const config_1 = require("../../shared/config");
let BeaconService = class BeaconService {
    constructor(http) {
        this.http = http;
        this.apiUrl = config_1.Config.apiUrl;
    }
    getListBeacons() {
        console.log("i am in getListBeacons method ...!!");
        return this.http.get(this.apiUrl + "beacons")
            .map(res => res.json())
            .map(data => {
            let beaconsList = [];
            data.result.forEach((beacon) => {
                beaconsList.push({ 'beacon': new nativescript_ibeacon_common_1.Beacon(beacon.uuid, beacon.major, beacon.minor), 'id_beacon': beacon.id_Beacon });
            });
            return beaconsList;
        })
            .catch(this.handleErrors);
    }
    handleErrors(error) {
        //console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    }
};
BeaconService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BeaconService);
exports.BeaconService = BeaconService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhY29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZWFjb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUMzQyx3Q0FBd0Q7QUFDeEQsZ0NBQXFDO0FBQ3JDLGtHQUEwRTtBQUMxRSxpQ0FBK0I7QUFFL0IsZ0RBQTJDO0FBRzNDLElBQWEsYUFBYSxHQUExQjtJQUdJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjlCLFdBQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDO0lBRVcsQ0FBQztJQUVuQyxjQUFjO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQzthQUN4QyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QixHQUFHLENBQUMsSUFBSTtZQUNMLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU07Z0JBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxvQ0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZILENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDQSxZQUFZLENBQUMsS0FBZTtRQUN6Qiw0Q0FBNEM7UUFDNUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUVKLENBQUE7QUF2QlksYUFBYTtJQUR6QixpQkFBVSxFQUFFO3FDQUlpQixXQUFJO0dBSHJCLGFBQWEsQ0F1QnpCO0FBdkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IEJlYWNvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtaWJlYWNvbi9uYXRpdmVzY3JpcHQtaWJlYWNvbi5jb21tb25cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IGdldE51bWJlciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJlYWNvblNlcnZpY2Uge1xyXG4gICAgYXBpVXJsID0gQ29uZmlnLmFwaVVybDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGdldExpc3RCZWFjb25zKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBpbiBnZXRMaXN0QmVhY29ucyBtZXRob2QgLi4uISFcIilcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVVybCArIFwiYmVhY29uc1wiKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJlYWNvbnNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBkYXRhLnJlc3VsdC5mb3JFYWNoKChiZWFjb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBiZWFjb25zTGlzdC5wdXNoKHsgJ2JlYWNvbic6IG5ldyBCZWFjb24oYmVhY29uLnV1aWQsIGJlYWNvbi5tYWpvciwgYmVhY29uLm1pbm9yKSwgJ2lkX2JlYWNvbic6IGJlYWNvbi5pZF9CZWFjb24gfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiZWFjb25zTGlzdDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuICAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==