import { Component } from '@angular/core';
import { Education } from './education';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
    selector: 'app-education',
    templateUrl: './scripts/app/education/education.component.html'
})

export class EducationComponent {
    educations: Education[];

    constructor() {
        this.educations = [];
        this.educations.push(new Education(
            "De La Salle University",
            "Bachelor of Science in Computer Science",
            "1997",
            "2002"));
    }
}