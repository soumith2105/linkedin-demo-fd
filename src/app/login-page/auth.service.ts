import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    getConfig(): void {
        // now returns an Observable of Config
        //return this.http.get<Config>(this.configUrl);
    }
    constructor(private http: HttpClient) {}
}
