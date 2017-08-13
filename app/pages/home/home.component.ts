import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { BeaconDetector } from "../../shared/beacon/beaconDetector";
import { BeaconService } from "../../shared/beacon/beacon.service";
import { PresenceService } from "../../shared/presence/presence.service";
import {clear} from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { getString } from "application-settings";
import { Image } from "ui/image";
const utils = require("utils/utils");
var ZXing = require('nativescript-zxing');
@Component({
    selector: "my-home",
    templateUrl: "pages/home/home.html",
    styleUrls: ["pages/home/home.css", "pages/home/home-common.css"]
})
export class HomeComponent implements OnInit {
    @ViewChild("image") image: ElementRef;

    
    constructor(private nav: RouterExtensions) {}

    getQRCode(){
    let qr_code =getString("qr_code", "none");
    if(qr_code =="none")
    {
        alert("pas de QR code ");
    }
    else{
    var zx = new ZXing();
    var img = zx.createBarcode({encode: qr_code, height: 100, width: 100, format: ZXing.QR_CODE});
    let myimage=<Image>this.image.nativeElement;
    myimage.src=img;                                                                                                                                                                               
    }
    }

    logout() {
        console.log("logout action item tapped.");
        clear();
        this.nav.navigate(['login']);


    }
    ngOnInit(): void {
    var context = utils.ad.getApplicationContext();
    var intent = new android.content.Intent(context, com.MyService.class);
    context.startService(intent);
    }

    

}