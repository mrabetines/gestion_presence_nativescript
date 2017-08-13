"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var beaconDetector_1 = require("./shared/beacon/beaconDetector");
var beacon_service_1 = require("./shared/beacon/beacon.service");
var presence_service_1 = require("./shared/presence/presence.service");
var http_1 = require("@angular/http");
var ns_http_1 = require("nativescript-angular/http/ns-http");
var Toast = require("nativescript-toast");
var utils = require("utils/utils");
var MyService = (function (_super) {
    __extends(MyService, _super);
    function MyService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyService.prototype.onStartCommand = function (intent, flags, startId) {
        _super.prototype.onStartCommand.call(this, intent, flags, startId);
        console.log("OnStartCommande Service ***");
        var http = new http_1.Http(new http_1.XHRBackend(new http_1.BrowserXhr(), new http_1.ResponseOptions({ status: 200, statusText: "OK", type: 2, headers: new http_1.Headers({}) }), new ns_http_1.NSXSRFStrategy()), new http_1.RequestOptions({ method: 0, headers: new http_1.Headers({}) }));
        var beaconService = new beacon_service_1.BeaconService(http);
        var presenceService = new presence_service_1.PresenceService(http);
        this.beaconDetector = new beaconDetector_1.BeaconDetector(beaconService, presenceService);
        return android.app.Service.START_STICKY;
    };
    MyService.prototype.onCreate = function () {
        console.log("Create Service ***");
        //var toast = Toast.makeText("SomeService STARTED");
        //toast.show();
        //this.myBeaconDetector.start();
    };
    ;
    MyService.prototype.onBind = function (intent) {
        console.log("##onBind NOT YET IMPLEMENTED");
        return null;
    };
    //we might need this method 
    /*public onTaskRemoved(rootIntent)
    {
   console.log("OnTaskRemoved ****");
   let context =utils.ad.getApplicationContext();
   let  restartServiceTask = new android.content.Intent(context,this.getClass());
  // restartServiceTask.setPackage(utils.ad.getPackageName());
   let restartPendingIntent =android.app.PendingIntent.getService(context, 1,restartServiceTask, android.app.PendingIntent.FLAG_ONE_SHOT);
   let myAlarmService = <android.app.AlarmManager> this.getSystemService(android.content.Context.ALARM_SERVICE);
   myAlarmService.set(
           android.app.AlarmManager.ELAPSED_REALTIME,
           android.os.SystemClock.elapsedRealtime() + 1000,
           restartPendingIntent);

   super.onTaskRemoved(rootIntent);
}*/
    MyService.prototype.onDestroy = function () {
        this.beaconDetector.stop();
    };
    return MyService;
}(android.app.Service));
MyService = __decorate([
    JavaProxy("com.MyService")
], MyService);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTXlTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQTZEO0FBQzdELGlFQUErRDtBQUMvRCx1RUFBcUU7QUFDckUsc0NBQTBKO0FBQzFKLDZEQUFtRTtBQUNuRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFHckMsSUFBTSxTQUFTO0lBQVMsNkJBQW1CO0lBQTNDOztJQStDQSxDQUFDO0lBNUNVLGtDQUFjLEdBQXJCLFVBQXNCLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTztRQUN6QyxpQkFBTSxjQUFjLFlBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJLEdBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxpQkFBVSxDQUFDLElBQUksaUJBQVUsRUFBRSxFQUFDLElBQUksc0JBQWUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxJQUFJLGNBQU8sQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsSUFBSSx3QkFBYyxFQUFFLENBQUMsRUFBQyxJQUFJLHFCQUFjLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxJQUFJLGNBQU8sQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNqTixJQUFJLGFBQWEsR0FBQyxJQUFJLDhCQUFhLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxlQUFlLEdBQUMsSUFBSSxrQ0FBZSxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUUsSUFBSSwrQkFBYyxDQUFDLGFBQWEsRUFBQyxlQUFlLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ3RDLENBQUM7SUFJRyw0QkFBUSxHQUFmO1FBQ08sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLG9EQUFvRDtRQUMxRCxlQUFlO1FBQ1QsZ0NBQWdDO0lBQ3JDLENBQUM7SUFBQSxDQUFDO0lBRUcsMEJBQU0sR0FBYixVQUFjLE1BQU07UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNEJBQTRCO0lBQzNCOzs7Ozs7Ozs7Ozs7OztHQWNGO0lBRVEsNkJBQVMsR0FBaEI7UUFDRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUEvQ0QsQ0FBd0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBK0MxQztBQS9DSyxTQUFTO0lBRGQsU0FBUyxDQUFDLGVBQWUsQ0FBQztHQUNyQixTQUFTLENBK0NkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWFjb25EZXRlY3Rvcn0gZnJvbSBcIi4vc2hhcmVkL2JlYWNvbi9iZWFjb25EZXRlY3RvclwiXHJcbmltcG9ydCB7IEJlYWNvblNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvYmVhY29uL2JlYWNvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFByZXNlbmNlU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9wcmVzZW5jZS9wcmVzZW5jZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHAsIENvbm5lY3Rpb25CYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucywgWEhSQmFja2VuZCwgQnJvd3NlclhociwgUmVzcG9uc2VPcHRpb25zLCBYU1JGU3RyYXRlZ3ksIENvb2tpZVhTUkZTdHJhdGVneSxIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxyXG5pbXBvcnQgeyBOU1hTUkZTdHJhdGVneSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwL25zLWh0dHBcIjtcclxudmFyIFRvYXN0ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10b2FzdFwiKTtcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwidXRpbHMvdXRpbHNcIik7XHJcblxyXG5ASmF2YVByb3h5KFwiY29tLk15U2VydmljZVwiKVxyXG5jbGFzcyBNeVNlcnZpY2UgZXh0ZW5kcyBhbmRyb2lkLmFwcC5TZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBiZWFjb25EZXRlY3RvcjogQmVhY29uRGV0ZWN0b3I7XHJcbiAgICAgXHJcbiAgICBwdWJsaWMgb25TdGFydENvbW1hbmQoaW50ZW50LCBmbGFncywgc3RhcnRJZCkge1xyXG4gICAgICAgc3VwZXIub25TdGFydENvbW1hbmQoaW50ZW50LCBmbGFncywgc3RhcnRJZCk7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIk9uU3RhcnRDb21tYW5kZSBTZXJ2aWNlICoqKlwiKTtcclxuICAgICAgIGxldCBodHRwPW5ldyBIdHRwKG5ldyBYSFJCYWNrZW5kKG5ldyBCcm93c2VyWGhyKCksbmV3IFJlc3BvbnNlT3B0aW9ucyh7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiT0tcIix0eXBlOjIsaGVhZGVyczpuZXcgSGVhZGVycyh7fSl9KSxuZXcgTlNYU1JGU3RyYXRlZ3koKSksbmV3IFJlcXVlc3RPcHRpb25zKHttZXRob2Q6MCxoZWFkZXJzOm5ldyBIZWFkZXJzKHt9KX0pKTtcclxuICAgICAgIGxldCBiZWFjb25TZXJ2aWNlPW5ldyBCZWFjb25TZXJ2aWNlIChodHRwKTtcclxuICAgICAgIGxldCBwcmVzZW5jZVNlcnZpY2U9bmV3IFByZXNlbmNlU2VydmljZSAoaHR0cCk7XHJcbiAgICAgICB0aGlzLmJlYWNvbkRldGVjdG9yPSBuZXcgQmVhY29uRGV0ZWN0b3IoYmVhY29uU2VydmljZSxwcmVzZW5jZVNlcnZpY2UpO1xyXG5cdFx0cmV0dXJuIGFuZHJvaWQuYXBwLlNlcnZpY2UuU1RBUlRfU1RJQ0tZO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcblx0cHVibGljIG9uQ3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlIFNlcnZpY2UgKioqXCIpO1xyXG4gICAgICAgIC8vdmFyIHRvYXN0ID0gVG9hc3QubWFrZVRleHQoXCJTb21lU2VydmljZSBTVEFSVEVEXCIpO1xyXG5cdFx0Ly90b2FzdC5zaG93KCk7XHJcbiAgICAgICAgLy90aGlzLm15QmVhY29uRGV0ZWN0b3Iuc3RhcnQoKTtcclxuXHRcdCB9O1xyXG5cclxuXHRwdWJsaWMgb25CaW5kKGludGVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyNvbkJpbmQgTk9UIFlFVCBJTVBMRU1FTlRFRFwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL3dlIG1pZ2h0IG5lZWQgdGhpcyBtZXRob2QgXHJcbiAgICAgLypwdWJsaWMgb25UYXNrUmVtb3ZlZChyb290SW50ZW50KVxyXG4gICAgIHtcclxuICAgIGNvbnNvbGUubG9nKFwiT25UYXNrUmVtb3ZlZCAqKioqXCIpO1xyXG4gICAgbGV0IGNvbnRleHQgPXV0aWxzLmFkLmdldEFwcGxpY2F0aW9uQ29udGV4dCgpO1xyXG4gICAgbGV0ICByZXN0YXJ0U2VydmljZVRhc2sgPSBuZXcgYW5kcm9pZC5jb250ZW50LkludGVudChjb250ZXh0LHRoaXMuZ2V0Q2xhc3MoKSk7XHJcbiAgIC8vIHJlc3RhcnRTZXJ2aWNlVGFzay5zZXRQYWNrYWdlKHV0aWxzLmFkLmdldFBhY2thZ2VOYW1lKCkpOyAgICBcclxuICAgIGxldCByZXN0YXJ0UGVuZGluZ0ludGVudCA9YW5kcm9pZC5hcHAuUGVuZGluZ0ludGVudC5nZXRTZXJ2aWNlKGNvbnRleHQsIDEscmVzdGFydFNlcnZpY2VUYXNrLCBhbmRyb2lkLmFwcC5QZW5kaW5nSW50ZW50LkZMQUdfT05FX1NIT1QpO1xyXG4gICAgbGV0IG15QWxhcm1TZXJ2aWNlID0gPGFuZHJvaWQuYXBwLkFsYXJtTWFuYWdlcj4gdGhpcy5nZXRTeXN0ZW1TZXJ2aWNlKGFuZHJvaWQuY29udGVudC5Db250ZXh0LkFMQVJNX1NFUlZJQ0UpO1xyXG4gICAgbXlBbGFybVNlcnZpY2Uuc2V0KFxyXG4gICAgICAgICAgICBhbmRyb2lkLmFwcC5BbGFybU1hbmFnZXIuRUxBUFNFRF9SRUFMVElNRSxcclxuICAgICAgICAgICAgYW5kcm9pZC5vcy5TeXN0ZW1DbG9jay5lbGFwc2VkUmVhbHRpbWUoKSArIDEwMDAsXHJcbiAgICAgICAgICAgIHJlc3RhcnRQZW5kaW5nSW50ZW50KTtcclxuXHJcbiAgICBzdXBlci5vblRhc2tSZW1vdmVkKHJvb3RJbnRlbnQpO1xyXG59Ki9cclxuXHJcbiAgICBwdWJsaWMgb25EZXN0cm95KCl7XHJcbiAgICAgICB0aGlzLmJlYWNvbkRldGVjdG9yLnN0b3AoKTtcclxuICAgIH1cclxufSJdfQ==