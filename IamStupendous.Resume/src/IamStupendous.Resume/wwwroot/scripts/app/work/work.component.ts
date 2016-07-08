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
    works: Work[];

    constructor(private workService: WorkService) { }

    /**
     * 
     */
    getWorks() {
        this.works = this.workService
            .getWorks();
    }

    ngOnInit() {
        this.getWorks();
    }
}
