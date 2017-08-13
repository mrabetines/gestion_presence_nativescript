import {BeaconDetector} from "./shared/beacon/beaconDetector"
import { BeaconService } from "./shared/beacon/beacon.service";
import { PresenceService } from "./shared/presence/presence.service";
import { Http, ConnectionBackend, RequestOptions, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy, CookieXSRFStrategy,Headers } from "@angular/http"
import { NSXSRFStrategy } from "nativescript-angular/http/ns-http";
var Toast = require("nativescript-toast");
const utils = require("utils/utils");

@JavaProxy("com.MyService")
class MyService extends android.app.Service {
    public beaconDetector: BeaconDetector;
     
    public onStartCommand(intent, flags, startId) {
       super.onStartCommand(intent, flags, startId);
       console.log("OnStartCommande Service ***");
       let http=new Http(new XHRBackend(new BrowserXhr(),new ResponseOptions({status:200,statusText:"OK",type:2,headers:new Headers({})}),new NSXSRFStrategy()),new RequestOptions({method:0,headers:new Headers({})}));
       let beaconService=new BeaconService (http);
       let presenceService=new PresenceService (http);
       this.beaconDetector= new BeaconDetector(beaconService,presenceService);
		return android.app.Service.START_STICKY;
    }
    
    

	public onCreate() {
        console.log("Create Service ***");
        //var toast = Toast.makeText("SomeService STARTED");
		//toast.show();
        //this.myBeaconDetector.start();
		 };

	public onBind(intent) {
        console.log("##onBind NOT YET IMPLEMENTED");
        return null;
    }

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

    public onDestroy(){
       this.beaconDetector.stop();
    }
}