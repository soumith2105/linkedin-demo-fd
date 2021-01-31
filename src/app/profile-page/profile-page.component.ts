import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Route} from "@angular/router";
import {ProfileService} from "./profile.service";
import {User} from "../auth";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: "app-profile-page",
    templateUrl: "./profile-page.component.html",
    styleUrls: ["./profile-page.component.scss"],
})
export class ProfilePageComponent implements OnInit {
    user: User;

    constructor(
        private route: ActivatedRoute,
        private profileService: ProfileService
    ) {
        this.user = {};
    }

    ngOnInit(): void {
        const username: string | null = this.route.snapshot.paramMap.get("username");
        this.profileService.getUserInfo(username).subscribe(
            (data: User) => {
                this.user = data;
            },
            (error: HttpErrorResponse) => console.log(error)
        );
    }

}
