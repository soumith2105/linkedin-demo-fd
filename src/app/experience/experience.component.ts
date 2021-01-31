import {Component, OnInit} from "@angular/core";
import {Experience} from "../experience";
import {ExperienceService} from "./experience.service";

@Component({
    selector: "app-experience",
    templateUrl: "./experience.component.html",
    styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
    // experiences: Array<Experience> = [
    //     {
    //         id: "1",
    //         role: "Software Developer",
    //         company: "Google",
    //         duration: "2 years",
    //         startMonth: "Jan 2019",
    //         endMonth: "Jan 2021",
    //         description: "Excellent Job",
    //         location: "Hyderabad",
    //     },
    //     {
    //         id: "1",
    //         role: "Software Developer",
    //         company: "Google",
    //         duration: "2 years",
    //         startMonth: "Jan 2019",
    //         endMonth: "Jan 2021",
    //         description: "Excellent Job",
    //         location: "Hyderabad",
    //     },
    // ];

    experiences: Array<Experience> = [];

    constructor(private experienceService: ExperienceService) {

    }


    ngOnInit(): void {

        const user = localStorage.getItem("user");
        if (user) {
            this.experienceService.getExperiences(user).subscribe(
                (data: Array<Experience>) => {
                    this.experiences = data;
                    console.log(this.experiences);
                },
                (error) => (console.log(error)),
            );
        }
    }
}
