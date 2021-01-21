import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageModule} from './login-page/login-page.module';
import {ProfilePageModule} from './profile-page/profile-page.module';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, LoginPageModule, ProfilePageModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
