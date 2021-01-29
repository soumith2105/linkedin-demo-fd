import { Component, OnInit } from "@angular/core";
import { Skill } from "../skill";

@Component({
    selector: "app-skills",
    templateUrl: "./skills.component.html",
    styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
    skills: Array<Skill> = [
        {
            language: "Python",
            level: 4.5,
            user: "Soumith Reddy",
        },
        {
            language: "Python",
            level: 4.5,
            user: "Soumith Reddy",
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
