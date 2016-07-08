import { Component, OnInit } from '@angular/core';
import { Education } from './education';
import { EducationService } from './education.service';


@Component({
    selector: 'app-education',
    templateUrl: './scripts/app/education/education.component.html',
    providers: [EducationService]
})

export class EducationComponent implements OnInit {
    educations: Array<Education>;

    constructor(private educationService: EducationService) { }

    /**
     * Retrieves the educations data
     */
    getEducations() {
        this.educations = this.educationService
            .getEducations();
        //    .then(educations => this.educations = educations)
        //    .catch(error => console.log(error));
        //console.log(this.educations);
        //console.log("educations retrieve completed.");
    }

    /**
     *
     */
    ngOnInit() {
        this.getEducations();
    }
}