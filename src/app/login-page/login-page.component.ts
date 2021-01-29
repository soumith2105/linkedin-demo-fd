import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

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

    constructor() {}

    onSubmit(): void {
        console.log(this.loginDetails.value);
    }

    ngOnInit(): void {}
}
