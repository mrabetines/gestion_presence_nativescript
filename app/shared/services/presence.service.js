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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXNlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0Msd0NBQXdEO0FBQ3hELGdDQUFxQztBQUNyQyxrR0FBd0U7QUFDeEUsaUNBQStCO0FBRy9CLElBQWEsZUFBZSxHQUE1QjtJQUdJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjdCLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQztJQUVOLENBQUM7SUFFbEMsY0FBYztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQTtRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxTQUFTLENBQUM7YUFDMUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEIsR0FBRyxDQUFDLElBQUk7WUFDVCw0Q0FBNEM7WUFDNUMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTTtnQkFDM0IscURBQXFEO2dCQUNyRCxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksb0NBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztnQkFDOUcsMkJBQTJCO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUFDLENBQUMsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCxPQUFPLENBQUMsS0FBWTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO2FBQzNFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELFlBQVksQ0FBQyxLQUFZLEVBQUMsR0FBVSxFQUFDLEdBQVUsRUFBQyxTQUFnQjtRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQzthQUN4SCxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QixHQUFHLENBQUMsSUFBSTtRQUNLLENBQUMsQ0FBQzthQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFlO1FBQzVCLDRDQUE0QztRQUM1Qyw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUVGLENBQUE7QUExQ1ksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUlpQixXQUFJO0dBSHJCLGVBQWUsQ0EwQzNCO0FBMUNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7QmVhY29ufSBmcm9tIFwibmF0aXZlc2NyaXB0LWliZWFjb24vbmF0aXZlc2NyaXB0LWliZWFjb24uY29tbW9uXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJlc2VuY2VTZXJ2aWNlIHtcclxuICAgICBhcGlVcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjEuNS9hcGkvdjEvXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldExpc3RCZWFjb25zKClcclxuICAgIHsgICBjb25zb2xlLmxvZyhcImkgYW0gaW4gZ2V0TGlzdEJlYWNvbnMgbWV0aG9kIC4uLiEhXCIpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlVcmwrXCJiZWFjb25zXCIpXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkYXRhOlwiK0pTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICBsZXQgYmVhY29uc0xpc3QgPSBbXTtcclxuICAgICAgICBkYXRhLnJlc3VsdC5mb3JFYWNoKChiZWFjb24pID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YS5yZXN1bHQ6XCIrSlNPTi5zdHJpbmdpZnkoYmVhY29uKSk7XHJcbiAgICAgICAgYmVhY29uc0xpc3QucHVzaCh7J2JlYWNvbic6bmV3IEJlYWNvbihiZWFjb24udXVpZCwgYmVhY29uLm1ham9yLCBiZWFjb24ubWlub3IpLCdpZF9iZWFjb24nOmJlYWNvbi5pZF9CZWFjb259KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGJlYWNvbi51dWlkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYmVhY29uc0xpc3Q7IH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuICAgIGdldERhdGEodG9rZW46c3RyaW5nKVxyXG4gICAgeyAgIGNvbnNvbGUubG9nKFwiaSBhbSBpbiBnZXREYXRhIG1ldGhvZCAuLi4hIVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlVcmwrXCJnZXRkYXRhXCIsSlNPTi5zdHJpbmdpZnkoeyd0b2tlbic6dG9rZW59KSlcclxuICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7ICBcclxuICAgIH1cclxuICAgIG1hcmtQcmVzZW5jZSh0b2tlbjpzdHJpbmcsY2luOnN0cmluZyxtZHA6c3RyaW5nLGlkX0JlYWNvbjpudW1iZXIpXHJcbiAgICB7ICAgY29uc29sZS5sb2coXCJpIGFtIGluIG1hcmtQcmVzZW5jZSBtZXRob2QgLi4uISFcIilcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlVcmwrXCJwcmVzZW5jZVwiLEpTT04uc3RyaW5naWZ5KHsgXCJjaW5cIjogY2luLFwibWRwXCI6bWRwLFwidG9rZW5cIjp0b2tlbixcImlkX0JlYWNvblwiOmlkX0JlYWNvbn0pKVxyXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIk9PcHMgZXJyb3JcIik7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=