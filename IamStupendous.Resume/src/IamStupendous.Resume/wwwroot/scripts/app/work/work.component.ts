import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { ACCORDION_DIRECTIVES  } from 'ng2-bootstrap/ng2-bootstrap';
import { Work } from './work';
import { Project } from './project';
import { Role } from "./role";
import { WorkService } from './work.service';


@Component({
    selector: 'app-work',
    directives: [ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: './scripts/app/work/work.component.html',
    providers: [WorkService]
})


export class WorkComponent {
    works: Array<Work>;
    errorMessage: string;

    constructor(private workService: WorkService) {
        this.works = new Array<Work>();
    }

    /**
     * 
     */
    getWorks() {
        this.workService
            .getWorks()
            .subscribe(
                works => {
                    this.works = works;
                    console.log(works);
                },
                error => {
                    this.errorMessage = <any>error;
                    console.log(this.errorMessage);
                });
    }

    ngOnInit() {
        this.getWorks();
    }
}