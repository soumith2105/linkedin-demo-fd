import {NgModule} from "@angular/core";
import {ProfilePageComponent} from "./profile-page.component";
import {ProfilePageRoutingModule} from "./profile-page-routing.module";
import {CommonModule} from "@angular/common";
import {ExperienceModule} from "../experience/experience.module";
import {EducationModule} from "../education/education.module";
import {SkillsModule} from "../skills/skills.module";

@NgModule({
    declarations: [
        ProfilePageComponent,
    ],
    imports: [
        ProfilePageRoutingModule,
        CommonModule,
        ExperienceModule,
        EducationModule,
        SkillsModule
    ],
    exports: [ProfilePageComponent],
})
export class ProfilePageModule {
}
