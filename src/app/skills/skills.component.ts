import { Component, OnInit } from "@angular/core";
import { Skill } from "../skill";
import {Experience} from "../experience";
import {SkillsService} from "./skills.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "app-skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
    skills: Array<Skill> = [];

    create = false;

    constructor(private skillsService: SkillsService) {}

    skillEditForm: FormGroup = new FormGroup({
        language: new FormControl("", Validators.required),
        level: new FormControl("", Validators.required),
        user: new FormControl(""),
    });

    ngOnInit(): void {
        const user = localStorage.getItem("user");
        if (user) {
            this.skillsService.getSkills(user).subscribe(
                (data: Array<Skill>) => {
                    this.skills = data;
                },
                (error) => (console.log(error)),
            );
            this.skillEditForm.patchValue({
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
        this.skillsService.createSKill(this.skillEditForm)
            .subscribe((data) => {
                console.log(data);
                this.reload();
                this.switchCreate();
            });
    }
}
