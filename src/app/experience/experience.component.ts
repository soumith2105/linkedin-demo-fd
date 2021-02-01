import {Component, OnInit} from "@angular/core";
import {Experience} from "../experience";
import {ExperienceService} from "./experience.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "app-experience",
    templateUrl: "./experience.component.html",
    styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {

    experiences: Array<Experience> = [];

    create = false;

    constructor(private experienceService: ExperienceService) {

    }

    experienceEditForm: FormGroup = new FormGroup({
        company: new FormControl("", Validators.required),
        role: new FormControl("", Validators.required),
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
            this.experienceService.getExperiences(user).subscribe(
                (data: Array<Experience>) => {
                    this.experiences = data;
                },
                (error) => (console.log(error)),
            );
            this.experienceEditForm.patchValue({
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
        this.experienceService.createExperience(this.experienceEditForm)
            .subscribe((data) => {
                console.log(data);
                this.reload();
                this.switchCreate();
            });
    }
}
