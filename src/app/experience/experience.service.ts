import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Observable, throwError} from "rxjs";
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

    getExperience(id: number): Observable<any> {
        return this.http.get<Experience>(this.urls.getAll + `/${id}`, this.httpOptions)
            .pipe(
                retry(1),
                catchError(error => this.errorHandling(error))
            );
    }

    createExperience(experienceForm: FormGroup): Observable<any> {
        return this.http.post<any>(this.urls.getAll, JSON.stringify(experienceForm.value), this.httpOptions)
            .pipe(
                retry(1),
                catchError(error => this.errorHandling(error))
            );
    }

    putExperience(id: number, experienceForm: FormGroup): Observable<any> {
        return this.http.put<any>(this.urls.getAll + `/${id}`, JSON.stringify(experienceForm.value), this.httpOptions)
            .pipe(
                retry(1),
                catchError(error => this.errorHandling(error))
            );
    }

    deleteExperience(id: number): Observable<any> {
        return this.http.delete<any>(this.urls.getAll + `/${id}`, this.httpOptions)
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
