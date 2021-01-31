import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "../auth";
import {catchError, retry} from "rxjs/operators";
import {FormGroup} from "@angular/forms";

@Injectable({
    providedIn: "root"
})
export class ProfileEditPageService {

    baseurl = "http://localhost:5050/update";

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        })
    };

    // Get User information
    updateUserInfo(username: string, userForm: FormGroup): Observable<any> {
        return this.http.put<User>(this.baseurl, userForm.value, this.httpOptions)
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
