import { Component, OnInit } from "@angular/core";
import { Experience } from "../experience";

@Component({
    selector: "app-experience",
    templateUrl: "./experience.component.html",
    styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
    experiences: Array<Experience> = [
        {
            id: "1",
            role: "Software Developer",
            company: "Google",
            duration: "2 years",
            startMonth: "Jan 2019",
            endMonth: "Jan 2021",
            description: "Excellent Job",
            location: "Hyderabad",
        },
        {
            id: "1",
            role: "Software Developer",
            company: "Google",
            duration: "2 years",
            startMonth: "Jan 2019",
            endMonth: "Jan 2021",
            description: "Excellent Job",
            location: "Hyderabad",
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
