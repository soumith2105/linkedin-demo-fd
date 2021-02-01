import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ExperienceInnerComponent} from "./experience-inner/experience-inner.component";
import {ExperienceComponent} from "./experience.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [ExperienceComponent, ExperienceInnerComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [ExperienceComponent]
})
export class ExperienceModule {
}
