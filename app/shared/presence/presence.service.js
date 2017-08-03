"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
const config_1 = require("../../shared/config");
let PresenceService = class PresenceService {
    constructor(http) {
        this.http = http;
        this.apiUrl = config_1.Config.apiUrl;
    }
    markPresence(id_Beacon, id_Etudiant) {
        console.log("i am in markPresence method ...!!");
        return this.http.post(this.apiUrl + "presence", { "id_Etudiant": id_Etudiant, "id_Beacon": id_Beacon })
            .map(res => res.json())
            .catch(this.handleErrors);
    }
    handleErrors(error) {
        return Rx_1.Observable.throw(error);
    }
};
PresenceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PresenceService);
exports.PresenceService = PresenceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByZXNlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0Msd0NBQXdEO0FBQ3hELGdDQUFxQztBQUVyQyxpQ0FBK0I7QUFDL0IsZ0RBQTJDO0FBRzNDLElBQWEsZUFBZSxHQUE1QjtJQUdJLFlBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjlCLFdBQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDO0lBRVcsQ0FBQztJQUNuQyxZQUFZLENBQUMsU0FBaUIsRUFBQyxXQUFrQjtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDbEcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWU7UUFDeEIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUVKLENBQUE7QUFmWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUk7R0FIckIsZUFBZSxDQWUzQjtBQWZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IEJlYWNvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtaWJlYWNvbi9uYXRpdmVzY3JpcHQtaWJlYWNvbi5jb21tb25cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJlc2VuY2VTZXJ2aWNlIHtcclxuICAgIGFwaVVybCA9IENvbmZpZy5hcGlVcmw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuICAgIG1hcmtQcmVzZW5jZShpZF9CZWFjb246IG51bWJlcixpZF9FdHVkaWFudDpudW1iZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImkgYW0gaW4gbWFya1ByZXNlbmNlIG1ldGhvZCAuLi4hIVwiKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCArIFwicHJlc2VuY2VcIiwgeyBcImlkX0V0dWRpYW50XCI6IGlkX0V0dWRpYW50LCBcImlkX0JlYWNvblwiOiBpZF9CZWFjb24gfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=