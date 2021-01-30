import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
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
        username: new FormControl(""),
        password: new FormControl(""),
    });

    showInfo(loginDetails: FormGroup): void {
        this.authService.getLoginToken(loginDetails).subscribe(
            (data: LoginResponse) => {
                localStorage.setItem("token", data.message);
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
        this.showInfo(this.loginDetails);
    }

    ngOnInit(): void {
    }
}
