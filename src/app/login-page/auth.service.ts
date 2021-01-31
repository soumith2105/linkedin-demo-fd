import {Injectable} from "@angular/core";
import {
    HttpClient, HttpEvent,
    HttpHeaders, HttpParams,
} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {LoginResponse} from "../auth";
import {FormGroup} from "@angular/forms";

// interface Options {
//     headers?: HttpHeaders | { [header: string]: string | string[] };
//     observe?: "body" | "events" | "response";
//     params?: HttpParams | { [param: string]: string | string[] };
//     reportProgress?: boolean;
//     responseType?: "json";
//     withCredentials?: boolean;
// }

@Injectable({
    providedIn: "root",
})
export class AuthService {
    urls = {
        login: "http://localhost:5050/login",
        signup: "http://localhost:5050/signup",
    };

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        })
    };

    getLoginToken(loginDetails: FormGroup): Observable<any> {
        // now returns an Observable of Config
        return this.http.post<LoginResponse>(this.urls.login, JSON.stringify(loginDetails.value), this.httpOptions)
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
