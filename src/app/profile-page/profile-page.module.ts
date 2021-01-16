import {NgModule} from '@angular/core';
import {ProfilePageComponent} from './profile-page.component';
import {ProfilePageRoutingModule} from './profile-page-routing.module';
import {CommonModule} from '@angular/common';
import {EducationComponent} from '../education/education.component';

@NgModule({
    declarations: [ProfilePageComponent, EducationComponent],
    imports: [ProfilePageRoutingModule, CommonModule],
    exports: [ProfilePageComponent],
})
export class ProfilePageModule {
}
