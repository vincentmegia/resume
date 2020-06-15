import { Component, OnInit } from '@angular/core';
import { Work } from './work';
import { Project } from './project';
import { Role } from "./role";
import { WorkService } from './work.service';


@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
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