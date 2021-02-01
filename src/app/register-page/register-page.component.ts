import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterPageService} from "./register-page.service";
import {LoginResponse} from "../auth";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: "app-register-page",
    templateUrl: "./register-page.component.html",
    styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent implements OnInit {

    constructor(private router: Router, private registerService: RegisterPageService) {
    }

    userForm: FormGroup = new FormGroup({
        username: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        name: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        status: new FormControl("", Validators.required),
        active: new FormControl(true),
        roles: new FormControl(""),
        description: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
    });

    ngOnInit(): void {
    }

    getToken(userForm: FormGroup): void {
        this.registerService.getLoginToken(userForm).subscribe(
            (data: LoginResponse) => {
                localStorage.setItem("token", data.message);
                localStorage.setItem("user", userForm.value.username);
                this.router.navigateByUrl(`user/${userForm.value.username}`);
                console.log(data);
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            }
        );
    }

    onSubmit(): void {
        console.log(this.userForm.value);
        this.getToken(this.userForm);
    }
}
