import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageModule } from "./login-page/login-page.module";
import { ProfilePageModule } from "./profile-page/profile-page.module";
import {ProfileEditPageModule} from "./profile-edit-page/profile-edit-page.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginPageModule,
        ProfilePageModule,
        HttpClientModule,
        ProfileEditPageModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
