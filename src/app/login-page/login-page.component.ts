import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {LoginResponse} from "../auth";
import {AuthService} from "./auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
    loginDetails: FormGroup = new FormGroup({
        username: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
    });

    getToken(loginDetails: FormGroup): void {
        this.authService.getLoginToken(loginDetails).subscribe(
            (data: LoginResponse) => {
                localStorage.setItem("token", data.message);
                localStorage.setItem("user", loginDetails.value.username);
                console.log(data);
            },
            (err: HttpErrorResponse) => {
                console.log(err);
            }
        );
    }

    constructor(private authService: AuthService) {
    }

    onSubmit(): void {
        console.log(this.loginDetails.value);
        this.getToken(this.loginDetails);
    }

    ngOnInit(): void {
    }
}
