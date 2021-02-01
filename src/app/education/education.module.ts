import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EducationComponent} from "./education.component";
import {EducationInnerComponent} from "./education-inner/education-inner.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [EducationComponent, EducationInnerComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [EducationComponent]
})
export class EducationModule {
}
