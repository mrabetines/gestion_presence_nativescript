"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
const config_1 = require("../../shared/config");
let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
        this.apiUrl = config_1.Config.apiUrl;
    }
    login(email, pwd, token) {
        console.log("email: " + email + " pwd: " + pwd + " token: " + token);
        return this.http.post(this.apiUrl + "student", { 'email': email, 'pwd': pwd, 'token': token })
            .map(response => response.json())
            .catch(this.handleErrors);
    }
    handleErrors(error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    }
};
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3R1ZGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBQzNDLHdDQUF3RDtBQUN4RCxnQ0FBcUM7QUFDckMsaUNBQStCO0FBQy9CLGdEQUEyQztBQUczQyxJQUFhLGNBQWMsR0FBM0I7SUFHSSxZQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixXQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQztJQUVHLENBQUM7SUFFbkMsS0FBSyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUMsS0FBWTtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxLQUFLLEdBQUMsUUFBUSxHQUFDLEdBQUcsR0FBQyxVQUFVLEdBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsQ0FBQzthQUNuRixHQUFHLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0osQ0FBQTtBQWhCWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUk7R0FIckIsY0FBYyxDQWdCMUI7QUFoQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBhcGlVcmwgPSBDb25maWcuYXBpVXJsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcbiBcclxuICAgIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHB3ZDogc3RyaW5nLHRva2VuOnN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWw6IFwiK2VtYWlsK1wiIHB3ZDogXCIrcHdkK1wiIHRva2VuOiBcIit0b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpVXJsICsgXCJzdHVkZW50XCIseydlbWFpbCc6IGVtYWlsLCdwd2QnOiBwd2QsJ3Rva2VuJzp0b2tlbn0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=