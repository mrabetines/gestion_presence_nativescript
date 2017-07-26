"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const nativescript_module_1 = require("nativescript-angular/nativescript.module");
const http_1 = require("nativescript-angular/http");
const app_routing_1 = require("./app.routing");
const app_component_1 = require("./app.component");
const presence_service_1 = require("./shared/services/presence.service");
const modal_dialog_1 = require("nativescript-angular/modal-dialog");
const forms_1 = require("nativescript-angular/forms");
const login_modal_1 = require("./login_modal/login.modal");
let AppModule = 
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
class AppModule {
};
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
            login_modal_1.LoginModalComponent
        ],
        entryComponents: [login_modal_1.LoginModalComponent],
        providers: [
            presence_service_1.PresenceService,
            modal_dialog_1.ModalDialogService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkQ7QUFDM0Qsa0ZBQThFO0FBQzlFLG9EQUFtRTtBQUNuRSwrQ0FBaUQ7QUFDakQsbURBQStDO0FBQy9DLHlFQUFxRTtBQUNyRSxvRUFBdUU7QUFDdkUsc0RBQXFFO0FBQ3JFLDJEQUFnRTtBQTRCaEUsSUFBYSxTQUFTO0FBSHRCOztFQUVFO0FBQ0Y7Q0FBMEIsQ0FBQTtBQUFiLFNBQVM7SUExQnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLDZCQUFzQjtZQUN0QiwrQkFBdUI7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLGlDQUFtQjtTQUN0QjtRQUNELGVBQWUsRUFBRSxDQUFDLGlDQUFtQixDQUFDO1FBQ3RDLFNBQVMsRUFBRTtZQUNQLGtDQUFlO1lBQ2YsaUNBQWtCO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztJQUNGOztNQUVFO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByZXNlbmNlU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlcy9wcmVzZW5jZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTG9naW5Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luX21vZGFsL2xvZ2luLm1vZGFsXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBMb2dpbk1vZGFsQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtMb2dpbk1vZGFsQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUHJlc2VuY2VTZXJ2aWNlLFxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=