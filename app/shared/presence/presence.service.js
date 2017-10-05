"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../../shared/config");
var application_settings_1 = require("tns-core-modules/application-settings/application-settings");
var PresenceService = (function () {
    function PresenceService(http) {
        this.apiUrl = config_1.Config.apiUrl;
        this.http = http;
    }
    PresenceService.prototype.markPresence = function (id_Beacon, date, id_Etudiant) {
        var headers = new http_1.Headers();
        headers.append("Authorization", "Bearer " + application_settings_1.getString("token", "none"));
        console.log("i am in markPresence method ...!!");
        return this.http.post(this.apiUrl + "presence", { "id_Etudiant": id_Etudiant, "date": date, "id_Beacon": id_Beacon }, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    PresenceService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return PresenceService;
}());
PresenceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PresenceService);
exports.PresenceService = PresenceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXNlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUVyQyxpQ0FBK0I7QUFDL0IsOENBQTJDO0FBQzNDLG1HQUF1RjtBQUd2RixJQUFhLGVBQWU7SUFHeEIseUJBQVksSUFBUztRQUZyQixXQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQztRQUdyQixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTCxzQ0FBWSxHQUFaLFVBQWEsU0FBaUIsRUFBQyxJQUFXLEVBQUMsV0FBa0I7UUFDekQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUMsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsRUFBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNqSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUlRLFdBQUk7R0FIWixlQUFlLENBb0IzQjtBQXBCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBCZWFjb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWliZWFjb24vbmF0aXZlc2NyaXB0LWliZWFjb24uY29tbW9uXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByZXNlbmNlU2VydmljZSB7XHJcbiAgICBhcGlVcmwgPSBDb25maWcuYXBpVXJsO1xyXG4gICAgaHR0cDpIdHRwO1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDpIdHRwKSB7XHJcbiAgICAgIHRoaXMuaHR0cD1odHRwOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgbWFya1ByZXNlbmNlKGlkX0JlYWNvbjogbnVtYmVyLGRhdGU6c3RyaW5nLGlkX0V0dWRpYW50Om51bWJlcikge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrZ2V0U3RyaW5nKFwidG9rZW5cIiwgXCJub25lXCIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImkgYW0gaW4gbWFya1ByZXNlbmNlIG1ldGhvZCAuLi4hIVwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlVcmwgKyBcInByZXNlbmNlXCIsIHsgXCJpZF9FdHVkaWFudFwiOiBpZF9FdHVkaWFudCxcImRhdGVcIjpkYXRlLCBcImlkX0JlYWNvblwiOiBpZF9CZWFjb24gfSx7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=