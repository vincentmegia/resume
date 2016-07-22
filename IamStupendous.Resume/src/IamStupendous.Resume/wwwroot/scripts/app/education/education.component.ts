import { Component, OnInit } from '@angular/core';
import { Education } from './education';
import { EducationService } from './education.service';


@Component({
    selector: 'app-education',
    templateUrl: './scripts/app/education/education.component.html',
    providers: [EducationService]
})

export class EducationComponent implements OnInit {
    educations: Array<Education> = [];
    errorMessage: string;

    constructor(private educationService: EducationService) { }

    /**
     * Retrieves the educations data
     */
    getEducations() {
        this.educationService
            .getEducations()
            .subscribe(
                educations => {
                    this.educations = educations;
                    console.log(educations[0]);
                },
                error => {
                    this.errorMessage = <any>error;
                    console.log(this.errorMessage);
                });
    }

    /**
     *
     */
    ngOnInit() {
        this.getEducations();
    }
}