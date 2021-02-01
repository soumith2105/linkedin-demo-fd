import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Experience} from "../experience";
import {catchError, retry} from "rxjs/operators";
import {FormGroup} from "@angular/forms";
import {Education} from "../education";

@Injectable({
    providedIn: "root",
})
export class EducationService {
    urls = {
        getAll: "http://localhost:5050/education",
    };

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
        }),
    };

    getEducationAll(username: string): Observable<any> {
        return this.http.get<Array<Education>>(this.urls.getAll, {
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

    getEducation(id: number): Observable<any> {
        return this.http.get<Education>(this.urls.getAll + `/${id}`, this.httpOptions)
            .pipe(
                retry(1),
                catchError(error => this.errorHandling(error))
            );
    }

    createEducation(educationForm: FormGroup): Observable<any> {
        return this.http.post<any>(this.urls.getAll, JSON.stringify(educationForm.value), this.httpOptions)
            .pipe(
                retry(1),
                catchError(error => this.errorHandling(error))
            );
    }

    putEducation(id: number, educationForm: FormGroup): Observable<any> {
        return this.http.put<any>(this.urls.getAll + `/${id}`, JSON.stringify(educationForm.value), this.httpOptions)
            .pipe(
                retry(1),
                catchError(error => this.errorHandling(error))
            );
    }

    deleteEducation(id: number): Observable<any> {
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
