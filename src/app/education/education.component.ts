import {Component, OnInit} from "@angular/core";
import {Education} from "../education";
import {EducationService} from "./education.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "app-education",
    templateUrl: "./education.component.html",
    styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {
    education: Array<Education> = [];

    create = false;

    constructor(private educationService: EducationService) {
    }

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

    ngOnInit(): void {
        const user = localStorage.getItem("user");
        if (user) {
            this.educationService.getEducationAll(user).subscribe(
                (data: Array<Education>) => {
                    this.education = data;
                },
                (error) => (console.log(error)),
            );
            this.educationEditForm.patchValue({
                user,
            });
        }

    }

    reload(): void {
        this.ngOnInit();
    }

    switchCreate(): void {
        this.create = !this.create;
    }

    submitForm(): void {
        this.educationService.createEducation(this.educationEditForm)
            .subscribe((data) => {
                console.log(data);
                this.reload();
                this.switchCreate();
            });
    }

}
