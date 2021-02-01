import {Component, Input, OnInit} from "@angular/core";
import {Experience} from "../../experience";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExperienceService} from "../experience.service";
import {Output, EventEmitter} from "@angular/core";

@Component({
    selector: "app-experience-inner",
    templateUrl: "./experience-inner.component.html",
    styleUrls: ["./experience-inner.component.scss"]
})
export class ExperienceInnerComponent implements OnInit {

    constructor(private experienceService: ExperienceService) {
    }

    edit = false;

    @Input()
    experience!: Experience;

    @Output() myEvent = new EventEmitter<null>();

    experienceEditForm: FormGroup = new FormGroup({
        company: new FormControl("", Validators.required),
        role: new FormControl("", Validators.required),
        startMonth: new FormControl(""),
        endMonth: new FormControl(""),
        duration: new FormControl(""),
        description: new FormControl(""),
        location: new FormControl(""),
        user: new FormControl(""),
    });

    callParent(): void {
        this.myEvent.emit();
    }

    switchEdit(): void {
        this.edit = !this.edit;
    }

    patchDefaults(experience: Experience): void {
        this.experienceEditForm.patchValue({
            company: experience.company.slug,
            role: experience.role,
            startMonth: experience.startMonth,
            endMonth: experience.endMonth,
            duration: experience.duration,
            description: experience.description,
            location: experience.location,
            user: experience.user
        });
    }

    ngOnInit(): void {
        this.patchDefaults(this.experience);
    }

    resetForm(): void {
        this.patchDefaults(this.experience);
    }

    submitForm(): void {
        this.experienceService.putExperience(this.experience.id, this.experienceEditForm)
            .subscribe((data) => {
                console.log(data);
                this.callParent();
            });
    }

    deleteExp(): void {
        this.experienceService.deleteExperience(this.experience.id)
            .subscribe((data) => {
                console.log(data);
                this.callParent();
            });
    }
}
