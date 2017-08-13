"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var student_service_1 = require("../student/student.service");
var router_1 = require("nativescript-angular/router");
var application_settings_1 = require("application-settings");
var LoginActivate = (function () {
    function LoginActivate(studentservice, nav) {
        this.studentservice = studentservice;
        this.nav = nav;
    }
    LoginActivate.prototype.canActivate = function () {
        if (application_settings_1.getNumber("id", 0) == 0) {
            this.nav.navigate(['login']);
            console.log("i am here");
            return false;
        }
        else {
            console.log("true");
            return true;
        }
    };
    return LoginActivate;
}());
LoginActivate = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [student_service_1.StudentService, router_1.RouterExtensions])
], LoginActivate);
exports.LoginActivate = LoginActivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw4REFBNEQ7QUFHNUQsc0RBQStEO0FBQy9ELDZEQUFpRDtBQUdqRCxJQUFhLGFBQWE7SUFDeEIsdUJBQW9CLGNBQThCLEVBQVUsR0FBcUI7UUFBN0QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7SUFBSSxDQUFDO0lBQ3RGLG1DQUFXLEdBQVg7UUFJRSxFQUFFLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBRXlCLGdDQUFjLEVBQWUseUJBQWdCO0dBRHRFLGFBQWEsQ0FnQnpCO0FBaEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0dWRlbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXROdW1iZXIgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZ2luQWN0aXZhdGUgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHVkZW50c2VydmljZTogU3R1ZGVudFNlcnZpY2UsIHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuICBjYW5BY3RpdmF0ZShcclxuICAgIC8qcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCovXHJcbiAgKS8qOiBPYnNlcnZhYmxlPGJvb2xlYW4+fFByb21pc2U8Ym9vbGVhbj58Ym9vbGVhbiovIHtcclxuICAgIGlmIChnZXROdW1iZXIoXCJpZFwiLCAwKSA9PSAwKSB7XHJcbiAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBoZXJlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=