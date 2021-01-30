import {Injectable} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";


@Injectable({
    providedIn: "root",
})
export class ProfileService {
    urls = {
        get: "http://localhost:5050/login",
        put: "http://localhost:5050/update",
    };

    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("token")}`,
        })
    };

    constructor() {
    }
}
