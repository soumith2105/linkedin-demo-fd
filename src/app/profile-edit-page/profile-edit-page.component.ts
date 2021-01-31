import {Component, OnInit} from "@angular/core";
import {User} from "../auth";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../profile-page/profile.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileEditPageService} from "./profile-edit-page.service";

@Component({
    selector: "app-profile-edit-page",
    templateUrl: "./profile-edit-page.component.html",
    styleUrls: ["./profile-edit-page.component.scss"],
})
export class ProfileEditPageComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private profileEditService: ProfileEditPageService,
        private router: Router
    ) {
        this.user = {
            username: "",
        };
    }

    user: User;

    userForm: FormGroup = new FormGroup({
        username: new FormControl("", Validators.required),
        name: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        status: new FormControl("", Validators.required),
        active: new FormControl(true),
        roles: new FormControl(""),
        description: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
    });

    updateInfo(): void {
        const username: string | null = this.route.snapshot.paramMap.get("username");
        this.profileService.getUserInfo(username).subscribe(
            (data: User) => {
                this.user = data;
                if (!this.checkUser()) {
                    this.router.navigateByUrl(`user/${this.user.username}`);
                }
                this.userForm.patchValue({
                    username: this.user.username,
                    name: this.user.name,
                    email: this.user.email,
                    active: this.user.active,
                    status: this.user.status,
                    roles: this.user.roles,
                    description: this.user.description,
                    address: this.user.address,
                });
            },
            (error: HttpErrorResponse) => console.log(error)
        );
    }

    ngOnInit(): void {
        this.updateInfo();
    }

    reset(): void {
        this.updateInfo();
    }

    checkUser(): boolean {
        return this.user.username === localStorage.getItem("user");
    }

    onSubmit(): void {
        if (this.user.username) {
            this.profileEditService.updateUserInfo(this.user.username, this.userForm).subscribe(data => {
                localStorage.setItem("token", data.message);
                localStorage.setItem("user", this.userForm.value.username);
                console.log(data);
                this.router.navigateByUrl(`user/${this.userForm.value.username}`);
            });
        }
    }
}
