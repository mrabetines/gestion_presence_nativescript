"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var application_settings_2 = require("application-settings");
var utils = require("utils/utils");
var ZXing = require('nativescript-zxing');
var HomeComponent = (function () {
    function HomeComponent(nav) {
        this.nav = nav;
    }
    HomeComponent.prototype.getQRCode = function () {
        var qr_code = application_settings_2.getString("qr_code", "none");
        if (qr_code == "none") {
            alert("pas de QR code ");
        }
        else {
            var zx = new ZXing();
            var img = zx.createBarcode({ encode: qr_code, height: 100, width: 100, format: ZXing.QR_CODE });
            var myimage = this.image.nativeElement;
            myimage.src = img;
        }
    };
    HomeComponent.prototype.logout = function () {
        console.log("logout action item tapped.");
        application_settings_1.clear();
        this.nav.navigate(['login']);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var context = utils.ad.getApplicationContext();
        var intent = new android.content.Intent(context, com.MyService.class);
        context.startService(intent);
    };
    return HomeComponent;
}());
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
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUl6RSw2REFBMkM7QUFDM0Msc0RBQStEO0FBQy9ELDZEQUFpRDtBQUVqRCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckMsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFNMUMsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixHQUFxQjtRQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtJQUFHLENBQUM7SUFFN0MsaUNBQVMsR0FBVDtRQUNBLElBQUksT0FBTyxHQUFFLGdDQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBRyxNQUFNLENBQUMsQ0FDcEIsQ0FBQztZQUNHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNMLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDckIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUM5RixJQUFJLE9BQU8sR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztRQUNoQixDQUFDO0lBQ0QsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDMUMsNEJBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBR2pDLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0EsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQy9DLElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBSUwsb0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbEN1QjtJQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzs4QkFBUSxpQkFBVTs0Q0FBQztBQUQ3QixhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLDRCQUE0QixDQUFDO0tBQ25FLENBQUM7cUNBSzJCLHlCQUFnQjtHQUpoQyxhQUFhLENBbUN6QjtBQW5DWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWFjb25EZXRlY3RvciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYmVhY29uL2JlYWNvbkRldGVjdG9yXCI7XHJcbmltcG9ydCB7IEJlYWNvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2JlYWNvbi9iZWFjb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcmVzZW5jZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3ByZXNlbmNlL3ByZXNlbmNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtjbGVhcn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ1aS9pbWFnZVwiO1xyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcclxudmFyIFpYaW5nID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXp4aW5nJyk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktaG9tZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvaG9tZS9ob21lLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvaG9tZS9ob21lLmNzc1wiLCBcInBhZ2VzL2hvbWUvaG9tZS1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoXCJpbWFnZVwiKSBpbWFnZTogRWxlbWVudFJlZjtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxyXG5cclxuICAgIGdldFFSQ29kZSgpe1xyXG4gICAgbGV0IHFyX2NvZGUgPWdldFN0cmluZyhcInFyX2NvZGVcIiwgXCJub25lXCIpO1xyXG4gICAgaWYocXJfY29kZSA9PVwibm9uZVwiKVxyXG4gICAge1xyXG4gICAgICAgIGFsZXJ0KFwicGFzIGRlIFFSIGNvZGUgXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgIHZhciB6eCA9IG5ldyBaWGluZygpO1xyXG4gICAgdmFyIGltZyA9IHp4LmNyZWF0ZUJhcmNvZGUoe2VuY29kZTogcXJfY29kZSwgaGVpZ2h0OiAxMDAsIHdpZHRoOiAxMDAsIGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xyXG4gICAgbGV0IG15aW1hZ2U9PEltYWdlPnRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudDtcclxuICAgIG15aW1hZ2Uuc3JjPWltZzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9nb3V0IGFjdGlvbiBpdGVtIHRhcHBlZC5cIik7XHJcbiAgICAgICAgY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHZhciBjb250ZXh0ID0gdXRpbHMuYWQuZ2V0QXBwbGljYXRpb25Db250ZXh0KCk7XHJcbiAgICB2YXIgaW50ZW50ID0gbmV3IGFuZHJvaWQuY29udGVudC5JbnRlbnQoY29udGV4dCwgY29tLk15U2VydmljZS5jbGFzcyk7XHJcbiAgICBjb250ZXh0LnN0YXJ0U2VydmljZShpbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxufSJdfQ==