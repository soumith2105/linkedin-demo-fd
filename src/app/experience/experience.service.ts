import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Observable, throwError} from "rxjs";
import {LoginResponse} from "../auth";
import {catchError, retry} from "rxjs/operators";
import {Experience} from "../experience";

@Injectable({
    providedIn: "root",
})
export class ExperienceService {
    urls = {
        getAll: "http://localhost:5050/experience",
    };

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        }),
    };

    getExperiences(username: string): Observable<any> {
        // now returns an Observable of Config
        return this.http.get<Array<Experience>>(this.urls.getAll, {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("token")}`,
            }),
            params: new HttpParams().set("user", username),
        })
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
