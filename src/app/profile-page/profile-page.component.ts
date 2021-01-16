import { Component, OnInit } from '@angular/core';

interface Education{
  institution: string;
  duration: string;
  startMonth: string;
  endMonth: string;
  description: string;
  location: string;
  course: string;
}

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

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
      institution: 'Narayana',
      duration: '2 years',
      startMonth: 'Jan 2019',
      endMonth: 'Feb 2019',
      description: 'Good College',
      location: 'Hyderabad',
      course: 'Intermediate',
    },
  ];
  constructor() {
  }

  ngOnInit(): void {
  }




}
