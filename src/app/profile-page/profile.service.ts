import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../auth";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";


@Injectable({
    providedIn: "root",
})
export class ProfileService {
    baseurl = "http://localhost:5050/user";

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        })
    };

    // Get User information
    getUserInfo(username: string | null): Observable<any> {
        return this.http.get<User>(this.baseurl + `/${username}`, this.httpOptions)
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
