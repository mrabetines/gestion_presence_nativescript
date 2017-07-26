import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { PresenceService } from "./shared/services/presence.service";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { LoginModalComponent } from "./login_modal/login.modal";

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
        LoginModalComponent
    ],
    entryComponents: [LoginModalComponent],
    providers: [
        PresenceService,
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
