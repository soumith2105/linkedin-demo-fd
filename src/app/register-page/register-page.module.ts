import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RegisterPageComponent} from "./register-page.component";
import {RegisterPageRoutingModule} from "./register-page-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [RegisterPageComponent],
    imports: [
        CommonModule,
        RegisterPageRoutingModule,
        ReactiveFormsModule
    ],
    exports: [RegisterPageComponent]
})
export class RegisterPageModule {
}
