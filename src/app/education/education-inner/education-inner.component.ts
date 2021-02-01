import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationService} from "../education.service";
import {Education} from "../../education";

@Component({
    selector: "app-education-inner",
    templateUrl: "./education-inner.component.html",
    styleUrls: ["./education-inner.component.scss"]
})
export class EducationInnerComponent implements OnInit {

    constructor(private educationService: EducationService) {
    }

    edit = false;

    @Input()
    education!: Education;

    @Output() myEvent = new EventEmitter<null>();

    educationEditForm: FormGroup = new FormGroup({
        institute: new FormControl("", Validators.required),
        course: new FormControl("", Validators.required),
        startMonth: new FormControl(""),
        endMonth: new FormControl(""),
        duration: new FormControl(""),
        description: new FormControl(""),
        location: new FormControl(""),
        user: new FormControl(""),
    });

    callParent(): void {
        this.myEvent.emit();
    }

    switchEdit(): void {
        this.edit = !this.edit;
    }

    patchDefaults(education: Education): void {
        this.educationEditForm.patchValue({
            institute: education.institute.slug,
            course: education.course,
            startMonth: education.startMonth,
            endMonth: education.endMonth,
            duration: education.duration,
            description: education.description,
            location: education.location,
            user: education.user
        });
    }

    ngOnInit(): void {
        this.patchDefaults(this.education);
    }

    resetForm(): void {
        this.patchDefaults(this.education);
    }

    submitForm(): void {
        this.educationService.putEducation(this.education.id, this.educationEditForm)
            .subscribe((data) => {
                console.log(data);
                this.callParent();
            });
    }

    deleteExp(): void {
        this.educationService.deleteEducation(this.education.id)
            .subscribe((data) => {
                console.log(data);
                this.callParent();
            });
    }

}
