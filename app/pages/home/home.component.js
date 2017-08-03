"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const beaconDetector_1 = require("../../shared/beacon/beaconDetector");
const beacon_service_1 = require("../../shared/beacon/beacon.service");
const presence_service_1 = require("../../shared/presence/presence.service");
const application_settings_1 = require("application-settings");
const router_1 = require("nativescript-angular/router");
const application_settings_2 = require("application-settings");
var ZXing = require('nativescript-zxing');
let HomeComponent = class HomeComponent {
    //the constructor
    constructor(beaconService, presenceService, nav) {
        this.beaconService = beaconService;
        this.presenceService = presenceService;
        this.nav = nav;
    }
    getQRCode() {
        let qr_code = application_settings_2.getString("qr_code", "none");
        if (qr_code == "none") {
            alert("pas de QR code ");
        }
        else {
            var zx = new ZXing();
            var img = zx.createBarcode({ encode: qr_code, height: 100, width: 100, format: ZXing.QR_CODE });
            let myimage = this.image.nativeElement;
            myimage.src = img;
        }
    }
    logout() {
        console.log("logout action item tapped.");
        application_settings_1.clear();
        this.nav.navigate(['login']);
    }
    ngOnInit() {
        console.log("ngOnInit");
        this.myBeaconDetector = new beaconDetector_1.BeaconDetector(this.beaconService, this.presenceService);
    }
    ngOnDestroy() {
        console.log("ngOnDestroy");
        this.myBeaconDetector.stop();
    }
};
__decorate([
    core_1.ViewChild("image"),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "image", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: "my-home",
        templateUrl: "pages/home/home.html",
        styleUrls: ["pages/home/home.css", "pages/home/home-common.css"]
    }),
    __metadata("design:paramtypes", [beacon_service_1.BeaconService, presence_service_1.PresenceService, router_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF5RTtBQUN6RSx1RUFBb0U7QUFDcEUsdUVBQW1FO0FBQ25FLDZFQUF5RTtBQUN6RSwrREFBMkM7QUFDM0Msd0RBQStEO0FBQy9ELCtEQUFpRDtBQUVqRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU8xQyxJQUFhLGFBQWEsR0FBMUI7SUFLSSxpQkFBaUI7SUFDakIsWUFBb0IsYUFBNEIsRUFBUyxlQUFnQyxFQUFTLEdBQXFCO1FBQW5HLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7SUFDdkgsQ0FBQztJQUNELFNBQVM7UUFDVCxJQUFJLE9BQU8sR0FBRSxnQ0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUcsTUFBTSxDQUFDLENBQ3BCLENBQUM7WUFDRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDTCxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3JCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7WUFDOUYsSUFBSSxPQUFPLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFDaEIsQ0FBQztJQUNELENBQUM7SUFDRCxNQUFNO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLDRCQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUdqQyxDQUFDO0lBQ0QsUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUV4RixDQUFDO0lBQ0QsV0FBVztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7Q0FFSixDQUFBO0FBbkN1QjtJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBUSxpQkFBVTs0Q0FBQztBQUg3QixhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLDRCQUE0QixDQUFDO0tBQ25FLENBQUM7cUNBT3FDLDhCQUFhLEVBQTBCLGtDQUFlLEVBQWMseUJBQWdCO0dBTjlHLGFBQWEsQ0FzQ3pCO0FBdENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlYWNvbkRldGVjdG9yIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9iZWFjb24vYmVhY29uRGV0ZWN0b3JcIjtcclxuaW1wb3J0IHsgQmVhY29uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYmVhY29uL2JlYWNvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFByZXNlbmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJlc2VuY2UvcHJlc2VuY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge2NsZWFyfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInVpL2ltYWdlXCI7XHJcbnZhciBaWGluZyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC16eGluZycpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1ob21lXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ob21lL2hvbWUuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9ob21lL2hvbWUuY3NzXCIsIFwicGFnZXMvaG9tZS9ob21lLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG4gICAgLy9zb21lIGF0dHJpYnV0ZXNcclxuICAgIHB1YmxpYyBteUJlYWNvbkRldGVjdG9yOiBCZWFjb25EZXRlY3RvcjtcclxuICAgIEBWaWV3Q2hpbGQoXCJpbWFnZVwiKSBpbWFnZTogRWxlbWVudFJlZjtcclxuXHJcbiAgICAvL3RoZSBjb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiZWFjb25TZXJ2aWNlOiBCZWFjb25TZXJ2aWNlLHByaXZhdGUgcHJlc2VuY2VTZXJ2aWNlOiBQcmVzZW5jZVNlcnZpY2UscHJpdmF0ZSBuYXY6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIH1cclxuICAgIGdldFFSQ29kZSgpe1xyXG4gICAgbGV0IHFyX2NvZGUgPWdldFN0cmluZyhcInFyX2NvZGVcIiwgXCJub25lXCIpO1xyXG4gICAgaWYocXJfY29kZSA9PVwibm9uZVwiKVxyXG4gICAge1xyXG4gICAgICAgIGFsZXJ0KFwicGFzIGRlIFFSIGNvZGUgXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgIHZhciB6eCA9IG5ldyBaWGluZygpO1xyXG4gICAgdmFyIGltZyA9IHp4LmNyZWF0ZUJhcmNvZGUoe2VuY29kZTogcXJfY29kZSwgaGVpZ2h0OiAxMDAsIHdpZHRoOiAxMDAsIGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xyXG4gICAgbGV0IG15aW1hZ2U9PEltYWdlPnRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudDtcclxuICAgIG15aW1hZ2Uuc3JjPWltZzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dvdXQgYWN0aW9uIGl0ZW0gdGFwcGVkLlwiKTtcclxuICAgICAgICBjbGVhcigpO1xyXG4gICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIik7XHJcbiAgICAgICAgdGhpcy5teUJlYWNvbkRldGVjdG9yID0gbmV3IEJlYWNvbkRldGVjdG9yKHRoaXMuYmVhY29uU2VydmljZSx0aGlzLnByZXNlbmNlU2VydmljZSk7XHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uRGVzdHJveVwiKTtcclxuICAgICAgICB0aGlzLm15QmVhY29uRGV0ZWN0b3Iuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==