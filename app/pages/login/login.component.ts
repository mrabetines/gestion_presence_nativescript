import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { StudentService } from "../../shared/student/student.service";
import { Page} from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "ui/dialogs";
import { TextField } from "ui/text-field";
import { setNumber,setString} from "application-settings";
import {Config} from "../../shared/config";
import { Token } from "../../app.component";
var validator = require("email-validator");

@Component({
    selector: "my-login",
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login.css", "pages/login/login-common.css"]
})
export class LoginComponent implements OnInit {

    private email: string;
    private pwd: string;
    private token: string;
    isLoading = false;
    @ViewChild("container") container: ElementRef;
    @ViewChild("field1") field1: ElementRef;
    @ViewChild("field2") field2: ElementRef;

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login"

    }
    constructor(private nav: RouterExtensions, private studentservice: StudentService, private page: Page) {
        this.email = "";
        this.pwd = "";
        
    }


    submit() {
        this.isLoading = true;
        let fieldemail = <TextField>this.field1.nativeElement;
        let fieldpwd = <TextField>this.field2.nativeElement;
        fieldemail.dismissSoftInput();
        fieldpwd.dismissSoftInput();
        if(!validator.validate(this.email))
        {
            alert("Enter a valid email address.");
            this.isLoading = false;
            return;
        }
        this.studentservice.login(this.email, this.pwd, Token).subscribe(
            (data) => {
                 this.isLoading = false;
                 if(data.result instanceof Array)
                 {
                    setNumber("id", data.result[0]);
                    setString("qr_code", data.result[1]);
                    setString("token", data.result[2]);
                    console.log("logged in");
                    this.nav.navigate(["/"], { clearHistory: true });
                 }
                 else
                 {
                 alert("can't find this account");
                }
            },
            (error) => {this.isLoading = false;
                        alert("error has occured");
                            }
        )

    }



}