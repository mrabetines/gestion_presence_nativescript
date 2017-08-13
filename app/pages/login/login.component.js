"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var student_service_1 = require("../../shared/student/student.service");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var application_settings_1 = require("application-settings");
var app_component_1 = require("../../app.component");
var validator = require("email-validator");
var LoginComponent = (function () {
    function LoginComponent(nav, studentservice, page) {
        this.nav = nav;
        this.studentservice = studentservice;
        this.page = page;
        this.isLoading = false;
        this.email = "";
        this.pwd = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.isLoading = true;
        var fieldemail = this.field1.nativeElement;
        var fieldpwd = this.field2.nativeElement;
        fieldemail.dismissSoftInput();
        fieldpwd.dismissSoftInput();
        if (!validator.validate(this.email)) {
            alert("Enter a valid email address.");
            this.isLoading = false;
            return;
        }
        this.studentservice.login(this.email, this.pwd, app_component_1.Token).subscribe(function (data) {
            _this.isLoading = false;
            if (data.result instanceof Array) {
                application_settings_1.setNumber("id", data.result[0]);
                application_settings_1.setString("qr_code", data.result[1]);
                application_settings_1.setString("token", data.result[2]);
                console.log("logged in");
                _this.nav.navigate(["/"], { clearHistory: true });
            }
            else {
                alert("can't find this account");
            }
        }, function (error) {
            _this.isLoading = false;
            alert("error has occured");
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("field1"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "field1", void 0);
__decorate([
    core_1.ViewChild("field2"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "field2", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-login",
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login.css", "pages/login/login-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, student_service_1.StudentService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHdFQUFzRTtBQUN0RSxnQ0FBOEI7QUFDOUIsc0RBQStEO0FBRy9ELDZEQUEwRDtBQUUxRCxxREFBNEM7QUFDNUMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFPM0MsSUFBYSxjQUFjO0lBZXZCLHdCQUFvQixHQUFxQixFQUFVLGNBQThCLEVBQVUsSUFBVTtRQUFqRixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFWckcsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVdkLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBRWxCLENBQUM7SUFURCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFBO0lBRWhELENBQUM7SUFRRCwrQkFBTSxHQUFOO1FBQUEsaUJBaUNDO1FBaENHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksVUFBVSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3RELElBQUksUUFBUSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLEVBQUUsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsQ0FBQztZQUNHLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUscUJBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDNUQsVUFBQyxJQUFJO1lBQ0EsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sWUFBWSxLQUFLLENBQUMsQ0FDaEMsQ0FBQztnQkFDRSxnQ0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLGdDQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUNELElBQUksQ0FDSixDQUFDO2dCQUNELEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDTCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQU0sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUNwQixDQUFBO0lBRUwsQ0FBQztJQUlMLHFCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQXJEMkI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7aURBQUM7QUFDekI7SUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7OEJBQVMsaUJBQVU7OENBQUM7QUFDbkI7SUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7OEJBQVMsaUJBQVU7OENBQUM7QUFSL0IsY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSw4QkFBOEIsQ0FBQztLQUN2RSxDQUFDO3FDQWdCMkIseUJBQWdCLEVBQTBCLGdDQUFjLEVBQWdCLFdBQUk7R0FmNUYsY0FBYyxDQTJEMUI7QUEzRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3N0dWRlbnQvc3R1ZGVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgc2V0TnVtYmVyLHNldFN0cmluZ30gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuLi8uLi9hcHAuY29tcG9uZW50XCI7XHJcbnZhciB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBlbWFpbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwd2Q6IHN0cmluZztcclxuICAgIHByaXZhdGUgdG9rZW46IHN0cmluZztcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiZmllbGQxXCIpIGZpZWxkMTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJmaWVsZDJcIikgZmllbGQyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCJcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBzdHVkZW50c2VydmljZTogU3R1ZGVudFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucHdkID0gXCJcIjtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZmllbGRlbWFpbCA9IDxUZXh0RmllbGQ+dGhpcy5maWVsZDEubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgZmllbGRwd2QgPSA8VGV4dEZpZWxkPnRoaXMuZmllbGQyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgZmllbGRlbWFpbC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgZmllbGRwd2QuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgICAgIGlmKCF2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdHVkZW50c2VydmljZS5sb2dpbih0aGlzLmVtYWlsLCB0aGlzLnB3ZCwgVG9rZW4pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgIGlmKGRhdGEucmVzdWx0IGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE51bWJlcihcImlkXCIsIGRhdGEucmVzdWx0WzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJxcl9jb2RlXCIsIGRhdGEucmVzdWx0WzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCBkYXRhLnJlc3VsdFsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWQgaW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL1wiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgYWxlcnQoXCJjYW4ndCBmaW5kIHRoaXMgYWNjb3VudFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJvciBoYXMgb2NjdXJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il19