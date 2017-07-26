"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
const nativescript_ibeacon_common_1 = require("nativescript-ibeacon/nativescript-ibeacon.common");
require("rxjs/add/operator/map");
let PresenceService = class PresenceService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "http://192.168.1.5/api/v1/";
    }
    getListBeacons() {
        console.log("i am in getListBeacons method ...!!");
        return this.http.get(this.apiUrl + "beacons")
            .map(res => res.json())
            .map(data => {
            //console.log("data:"+JSON.stringify(data));
            let beaconsList = [];
            data.result.forEach((beacon) => {
                //console.log("data.result:"+JSON.stringify(beacon));
                beaconsList.push({ 'beacon': new nativescript_ibeacon_common_1.Beacon(beacon.uuid, beacon.major, beacon.minor), 'id_beacon': beacon.id_Beacon });
                //console.log(beacon.uuid);
            });
            return beaconsList;
        })
            .catch(this.handleErrors);
    }
    getData(token) {
        console.log("i am in getData method ...!!");
        console.log(token);
        return this.http.post(this.apiUrl + "getdata", JSON.stringify({ 'token': token }))
            .map(res => res.json())
            .map(data => {
            console.log(JSON.stringify(data));
            return data.result;
        })
            .catch(this.handleErrors);
    }
    markPresence(token, cin, mdp, id_Beacon) {
        console.log("i am in markPresence method ...!!");
        return this.http.post(this.apiUrl + "presence", JSON.stringify({ "cin": cin, "mdp": mdp, "token": token, "id_Beacon": id_Beacon }))
            .map(res => res.json())
            .map(data => {
        })
            .catch(this.handleErrors);
    }
    handleErrors(error) {
        //console.log(JSON.stringify(error.json()));
        //console.log("OOps error");
        return Rx_1.Observable.throw(error);
    }
};
PresenceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PresenceService);
exports.PresenceService = PresenceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXNlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0Msd0NBQXdEO0FBQ3hELGdDQUFxQztBQUNyQyxrR0FBd0U7QUFDeEUsaUNBQStCO0FBRy9CLElBQWEsZUFBZSxHQUE1QjtJQUdJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjdCLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQztJQUVOLENBQUM7SUFFbEMsY0FBYztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQTtRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxTQUFTLENBQUM7YUFDMUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEIsR0FBRyxDQUFDLElBQUk7WUFDVCw0Q0FBNEM7WUFDNUMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTTtnQkFDM0IscURBQXFEO2dCQUNyRCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksb0NBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztnQkFDOUcsMkJBQTJCO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUFDLENBQUMsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxPQUFPLENBQUMsS0FBWTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO2FBQzNFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxJQUFJO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsWUFBWSxDQUFDLEtBQVksRUFBQyxHQUFVLEVBQUMsR0FBVSxFQUFDLFNBQWdCO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO2FBQ3hILEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxJQUFJO1FBQ0ssQ0FBQyxDQUFDO2FBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWU7UUFDNUIsNENBQTRDO1FBQzVDLDRCQUE0QjtRQUM1QixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBRUYsQ0FBQTtBQTlDWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUk7R0FIckIsZUFBZSxDQThDM0I7QUE5Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtCZWFjb259IGZyb20gXCJuYXRpdmVzY3JpcHQtaWJlYWNvbi9uYXRpdmVzY3JpcHQtaWJlYWNvbi5jb21tb25cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcmVzZW5jZVNlcnZpY2Uge1xyXG4gICAgIGFwaVVybCA9IFwiaHR0cDovLzE5Mi4xNjguMS41L2FwaS92MS9cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgZ2V0TGlzdEJlYWNvbnMoKVxyXG4gICAgeyAgIGNvbnNvbGUubG9nKFwiaSBhbSBpbiBnZXRMaXN0QmVhY29ucyBtZXRob2QgLi4uISFcIilcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVVybCtcImJlYWNvbnNcIilcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGE6XCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIGxldCBiZWFjb25zTGlzdCA9IFtdO1xyXG4gICAgICAgIGRhdGEucmVzdWx0LmZvckVhY2goKGJlYWNvbikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkYXRhLnJlc3VsdDpcIitKU09OLnN0cmluZ2lmeShiZWFjb24pKTtcclxuICAgICAgICBiZWFjb25zTGlzdC5wdXNoKHsnYmVhY29uJzpuZXcgQmVhY29uKGJlYWNvbi51dWlkLCBiZWFjb24ubWFqb3IsIGJlYWNvbi5taW5vciksJ2lkX2JlYWNvbic6YmVhY29uLmlkX0JlYWNvbn0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYmVhY29uLnV1aWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBiZWFjb25zTGlzdDsgfSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSh0b2tlbjpzdHJpbmcpXHJcbiAgICB7ICAgY29uc29sZS5sb2coXCJpIGFtIGluIGdldERhdGEgbWV0aG9kIC4uLiEhXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCtcImdldGRhdGFcIixKU09OLnN0cmluZ2lmeSh7J3Rva2VuJzp0b2tlbn0pKVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTsgIFxyXG4gICAgfVxyXG4gICAgbWFya1ByZXNlbmNlKHRva2VuOnN0cmluZyxjaW46c3RyaW5nLG1kcDpzdHJpbmcsaWRfQmVhY29uOm51bWJlcilcclxuICAgIHsgICBjb25zb2xlLmxvZyhcImkgYW0gaW4gbWFya1ByZXNlbmNlIG1ldGhvZCAuLi4hIVwiKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCtcInByZXNlbmNlXCIsSlNPTi5zdHJpbmdpZnkoeyBcImNpblwiOiBjaW4sXCJtZHBcIjptZHAsXCJ0b2tlblwiOnRva2VuLFwiaWRfQmVhY29uXCI6aWRfQmVhY29ufSkpXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiT09wcyBlcnJvclwiKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==