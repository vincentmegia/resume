import { Component, OnInit } from '@angular/core';
import { Summary } from './summary';
import { SummaryService } from './summary.service';


@Component({
    selector: 'app-summary',
    templateUrl: './scripts/app/summary/summary.component.html',
    providers: [SummaryService]
})

export class SummaryComponent implements OnInit {
    summaries: Array<Summary>;

    constructor(private summaryService: SummaryService) { }

    /**
     * 
     */
    getSummaries() {
        this.summaries = this.summaryService
            .getSummaries();
    }

    /**
     * 
     */
    ngOnInit() {
        this.getSummaries();
    }
}