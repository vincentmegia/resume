import { Component, OnInit } from '@angular/core';
import { Title } from './title';
import { TitleService } from './title.service';

@Component({
    selector: 'app-title',
    templateUrl: './scripts/app/title/title.component.html',
    providers: [TitleService]
})

export class TitleComponent implements OnInit {
    title: Title;

    constructor(private titleService: TitleService) { }

    /**
     * 
     */
    getTitles() {
        let titles = this.titleService
            .getTitles();
        this.title = titles[0];
    }

    /**
     * 
     */
    ngOnInit() {
        this.getTitles();
    }
}