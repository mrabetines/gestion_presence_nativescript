"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var home_component_1 = require("./pages/home/home.component");
var student_service_1 = require("./shared/student/student.service");
var beacon_service_1 = require("./shared/beacon/beacon.service");
var presence_service_1 = require("./shared/presence/presence.service");
var login_guard_1 = require("./shared/security/login.guard");
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            forms_1.NativeScriptFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent
        ],
        providers: [
            presence_service_1.PresenceService,
            student_service_1.StudentService,
            login_guard_1.LoginActivate,
            beacon_service_1.BeaconService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxvREFBcUU7QUFDckUsNkNBQWdEO0FBQ2hELGlEQUErQztBQUMvQyxpRUFBNkQ7QUFDN0QsOERBQTBEO0FBQzFELG9FQUFrRTtBQUNsRSxpRUFBK0Q7QUFDL0QsdUVBQXFFO0FBQ3JFLDZEQUE0RDtBQWtDNUQsSUFBYSxTQUFTO0lBSnRCOztNQUVFO0lBRUY7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLFNBQVM7SUE5QnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLDZCQUFzQjtZQUN0QiwrQkFBdUI7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLGdDQUFjO1lBQ2QsOEJBQWE7U0FFaEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxrQ0FBZTtZQUNmLGdDQUFjO1lBQ2QsMkJBQWE7WUFDYiw4QkFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7SUFDRjs7TUFFRTtHQUVXLFNBQVMsQ0FDckI7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGV9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3R1ZGVudFNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc3R1ZGVudC9zdHVkZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IEJlYWNvblNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvYmVhY29uL2JlYWNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQcmVzZW5jZVNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvcHJlc2VuY2UvcHJlc2VuY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtMb2dpbkFjdGl2YXRlfSBmcm9tIFwiLi9zaGFyZWQvc2VjdXJpdHkvbG9naW4uZ3VhcmRcIjtcblxuIFxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICAgICAgIFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByZXNlbmNlU2VydmljZSxcbiAgICAgICAgU3R1ZGVudFNlcnZpY2UsXG4gICAgICAgIExvZ2luQWN0aXZhdGUsXG4gICAgICAgIEJlYWNvblNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbiBcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyBcbn1cbiBcbiJdfQ==