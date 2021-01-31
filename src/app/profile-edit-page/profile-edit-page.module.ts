import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProfileEditPageComponent} from "./profile-edit-page.component";
import {ProfileEditPageRoutingModule} from "./profile-edit-page-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [ProfileEditPageComponent],
    imports: [
        CommonModule,
        ProfileEditPageRoutingModule,
        ReactiveFormsModule,
    ]
})
export class ProfileEditPageModule {
}
