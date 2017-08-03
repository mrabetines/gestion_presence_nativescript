"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const student_service_1 = require("../student/student.service");
const router_1 = require("nativescript-angular/router");
const application_settings_1 = require("application-settings");
let LoginActivate = class LoginActivate {
    constructor(studentservice, nav) {
        this.studentservice = studentservice;
        this.nav = nav;
    }
    canActivate() {
        if (application_settings_1.getNumber("id", 0) == 0) {
            this.nav.navigate(['login']);
            console.log("i am here");
            return false;
        }
        else {
            console.log("true");
            return true;
        }
    }
};
LoginActivate = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [student_service_1.StudentService, router_1.RouterExtensions])
], LoginActivate);
exports.LoginActivate = LoginActivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUMzQyxnRUFBNEQ7QUFHNUQsd0RBQStEO0FBQy9ELCtEQUFpRDtBQUdqRCxJQUFhLGFBQWEsR0FBMUI7SUFDRSxZQUFvQixjQUE4QixFQUFVLEdBQXFCO1FBQTdELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO0lBQUksQ0FBQztJQUN0RixXQUFXO1FBSVQsRUFBRSxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7Q0FDRixDQUFBO0FBaEJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FFeUIsZ0NBQWMsRUFBZSx5QkFBZ0I7R0FEdEUsYUFBYSxDQWdCekI7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tIFwiLi4vc3R1ZGVudC9zdHVkZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldE51bWJlciB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5BY3RpdmF0ZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0dWRlbnRzZXJ2aWNlOiBTdHVkZW50U2VydmljZSwgcHJpdmF0ZSBuYXY6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG4gIGNhbkFjdGl2YXRlKFxyXG4gICAgLypyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90Ki9cclxuICApLyo6IE9ic2VydmFibGU8Ym9vbGVhbj58UHJvbWlzZTxib29sZWFuPnxib29sZWFuKi8ge1xyXG4gICAgaWYgKGdldE51bWJlcihcImlkXCIsIDApID09IDApIHtcclxuICAgICAgdGhpcy5uYXYubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgY29uc29sZS5sb2coXCJpIGFtIGhlcmVcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==