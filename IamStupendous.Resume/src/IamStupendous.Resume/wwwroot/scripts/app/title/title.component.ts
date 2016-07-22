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
    errorMessage: string;

    constructor(private titleService: TitleService) {
        this.title = new Title(null, null, null); //need to fix where view is rendering first before data retrieval is complete
    }

    /**
     * 
     */
    getTitles() {
        this.titleService
            .getTitles()
            .subscribe(
                titles => {
                    this.title = titles[0];
                    console.log(titles);
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
        this.getTitles();
    }
}