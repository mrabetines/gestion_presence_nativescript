"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const dialogs_1 = require("nativescript-angular/directives/dialogs");
let LoginModalComponent = class LoginModalComponent {
    constructor(params) {
        this.params = params;
    }
    submit() {
        this.params.closeCallback([this.cin, this.mdp]);
    }
};
LoginModalComponent = __decorate([
    core_1.Component({
        selector: "login_modal",
        templateUrl: "./login_modal/login-modal.html",
    }),
    __metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
], LoginModalComponent);
exports.LoginModalComponent = LoginModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEwQztBQUMxQyxxRUFBNEU7QUFNNUUsSUFBYSxtQkFBbUIsR0FBaEM7SUFLSSxZQUEyQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUNwRCxDQUFDO0lBRU0sTUFBTTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBRUosQ0FBQTtBQVpZLG1CQUFtQjtJQUovQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLGdDQUFnQztLQUNoRCxDQUFDO3FDQU1xQywyQkFBaUI7R0FMM0MsbUJBQW1CLENBWS9CO0FBWlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJsb2dpbl9tb2RhbFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbl9tb2RhbC9sb2dpbi1tb2RhbC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZGFsQ29tcG9uZW50IHtcclxuIFxyXG4gICAgcHVibGljIGNpbjpzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWRwOnN0cmluZztcclxuIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xyXG4gICAgfVxyXG4gXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soW3RoaXMuY2luLHRoaXMubWRwXSk7XHJcbiAgICB9XHJcbiBcclxufSJdfQ==