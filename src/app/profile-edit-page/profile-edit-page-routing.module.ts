import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {ProfileEditPageComponent} from "./profile-edit-page.component";

const routes: Routes = [
    {
        path: "user/:username/edit",
        component: ProfileEditPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ProfileEditPageRoutingModule {}
