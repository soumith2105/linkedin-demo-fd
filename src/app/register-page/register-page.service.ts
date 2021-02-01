import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Observable, throwError} from "rxjs";
import {LoginResponse} from "../auth";
import {catchError, retry} from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class RegisterPageService {

    urls = {
        login: "http://localhost:5050/signup",
    };

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        })
    };

    getLoginToken(userForm: FormGroup): Observable<any> {
        // now returns an Observable of Config
        return this.http.post<LoginResponse>(this.urls.login, JSON.stringify(userForm.value), this.httpOptions)
            .pipe(
                retry(1),
                catchError(error => this.errorHandling(error))
            );
    }

    // Error handling
    errorHandling(error: any): Observable<never> {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    constructor(private http: HttpClient) {
    }
}
