import { Component, OnInit } from '@angular/core';
import { Summary } from './summary';
import { SummaryService } from './summary.service';


@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    providers: [SummaryService]
})

export class SummaryComponent implements OnInit {
    summaries: Array<Summary>;
    errorMessage: string;

    constructor(private summaryService: SummaryService) { }

    /**
     * 
     */
    getSummaries() {
        this.summaryService
            .getSummaries()
            .subscribe(
                summaries => {
                    this.summaries = summaries;
                    console.log(summaries);
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
        this.getSummaries();
    }
}