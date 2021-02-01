import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SkillsComponent} from "./skills.component";
import {SkillInnerComponent} from "./skill-inner/skill-inner.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [SkillsComponent, SkillInnerComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [SkillsComponent]
})
export class SkillsModule {
}
