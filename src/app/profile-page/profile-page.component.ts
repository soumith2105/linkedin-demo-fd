import {Component, OnInit} from '@angular/core';

export interface Education {
    institution: string;
    duration: string;
    startMonth: string;
    endMonth: string;
    description: string;
    location: string;
    course: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    startMonth: string;
    endMonth: string;
    description: string;
    location: string;
}

export interface Skill {
    language: string;
    level: number;
    user: string;
}

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }

}
