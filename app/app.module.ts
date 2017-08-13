import { NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule} from "./app.routing";
import { AppComponent } from "./app.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import { StudentService } from "./shared/student/student.service";
import { BeaconService } from "./shared/beacon/beacon.service";
import { PresenceService } from "./shared/presence/presence.service";
import {LoginActivate} from "./shared/security/login.guard";

 

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
         
    ],
    providers: [
        PresenceService,
        StudentService,
        LoginActivate,
        BeaconService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
 
export class AppModule { 
}
 
