import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginActivate} from "./shared/security/login.guard";
import { Routes } from "@angular/router";
const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent ,canActivate:[LoginActivate]},
    { path: 'login', component: LoginComponent},  
];
/*export const navigatableComponents = [
  HomeComponent,
  LoginComponent
];*/

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }