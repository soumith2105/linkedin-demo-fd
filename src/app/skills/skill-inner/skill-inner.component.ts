import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Skill} from "../../skill";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Experience} from "../../experience";
import {SkillsService} from "../skills.service";

@Component({
    selector: "app-skill-inner",
    templateUrl: "./skill-inner.component.html",
    styleUrls: ["./skill-inner.component.scss"]
})
export class SkillInnerComponent implements OnInit {

    @Input()
    skill!: Skill;

    edit = false;

    @Output() myEvent = new EventEmitter<null>();

    skillEditForm: FormGroup = new FormGroup({
        language: new FormControl("", Validators.required),
        level: new FormControl("", Validators.required),
        user: new FormControl(""),
    });


    constructor(private skillsService: SkillsService) {
    }

    callParent(): void {
        this.myEvent.emit();
    }

    switchEdit(): void {
        this.edit = !this.edit;
    }

    patchDefaults(skill: Skill): void {
        this.skillEditForm.patchValue({
            language: skill.language.slug,
            level: skill.level,
            user: skill.user
        });
    }

    ngOnInit(): void {
        this.patchDefaults(this.skill);
    }

    resetForm(): void {
        this.patchDefaults(this.skill);
    }

    submitForm(): void {
        this.skillsService.putSkill(this.skill.id, this.skillEditForm)
            .subscribe((data) => {
                console.log(data);
                this.callParent();
            });
    }

    deleteExp(): void {
        this.skillsService.deleteSkill(this.skill.id)
            .subscribe((data) => {
                console.log(data);
                this.callParent();
            });
    }

}
