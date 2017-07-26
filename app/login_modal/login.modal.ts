import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
 
@Component({
    selector: "login_modal",
    templateUrl: "./login_modal/login-modal.html",
})
export class LoginModalComponent {
 
    public cin:string;
    public mdp:string;
 
    public constructor(private params: ModalDialogParams) {
    }
 
    public submit() {
        this.params.closeCallback([this.cin,this.mdp]);
    }
 
}