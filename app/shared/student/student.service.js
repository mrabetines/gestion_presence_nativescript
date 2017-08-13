"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../../shared/config");
var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
        this.apiUrl = config_1.Config.apiUrl;
    }
    StudentService.prototype.login = function (email, pwd, token) {
        console.log("email: " + email + " pwd: " + pwd + " token: " + token);
        return this.http.post(this.apiUrl + "student", { 'email': email, 'password': pwd, 'token': token })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    StudentService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3R1ZGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsaUNBQStCO0FBQy9CLDhDQUEyQztBQUczQyxJQUFhLGNBQWM7SUFHdkIsd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLFdBQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDO0lBRUcsQ0FBQztJQUVuQyw4QkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLEdBQVcsRUFBQyxLQUFZO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLEtBQUssR0FBQyxRQUFRLEdBQUMsR0FBRyxHQUFDLFVBQVUsR0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDO2FBQ3hGLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUk7R0FIckIsY0FBYyxDQWUxQjtBQWZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0dWRlbnRTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgYXBpVXJsID0gQ29uZmlnLmFwaVVybDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gXHJcbiAgICBsb2dpbihlbWFpbDogc3RyaW5nLCBwd2Q6IHN0cmluZyx0b2tlbjpzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVtYWlsOiBcIitlbWFpbCtcIiBwd2Q6IFwiK3B3ZCtcIiB0b2tlbjogXCIrdG9rZW4pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCArIFwic3R1ZGVudFwiLHsnZW1haWwnOiBlbWFpbCwncGFzc3dvcmQnOiBwd2QsJ3Rva2VuJzp0b2tlbn0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=