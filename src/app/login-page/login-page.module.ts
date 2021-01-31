import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./login-page.component";
import { LoginPageRoutingModule } from "./login-page-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [LoginPageComponent],
    imports: [LoginPageRoutingModule, FormsModule, ReactiveFormsModule, CommonModule],
    exports: [LoginPageComponent],
})
export class LoginPageModule {}
