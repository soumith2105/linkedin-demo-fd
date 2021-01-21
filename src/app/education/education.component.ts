import {Component, OnInit} from '@angular/core';
import {Education} from '../profile-page/profile-page.component';


@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

    education: Array<Education> = [

        {
            institution: 'Narayana',
            duration: '2 years',
            startMonth: 'Jan 2019',
            endMonth: 'Feb 2019',
            description: 'Good College',
            location: 'Hyderabad',
            course: 'Intermediate',
        },
        {
            institution: 'Vasavi College of Engineering',
            duration: '2 years',
            startMonth: 'Jan 2019',
            endMonth: 'Feb 2019',
            description: 'Good College',
            location: 'Hyderabad',
            course: 'Bachelor of Engineering',
        },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}