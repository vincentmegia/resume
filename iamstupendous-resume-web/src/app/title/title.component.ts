import { Component, OnInit } from '@angular/core';
import { Title } from './title';
import { TitleService } from './title.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    providers: [TitleService]
})

export class TitleComponent implements OnInit {
    titles: Array<Title>;
    errorMessage: string;

    constructor(private titleService: TitleService) {
        this.titles = new Array<Title>();
    }

    /**
     * 
     */
    getTitles() {
        this.titleService
            .getTitles()
            .subscribe(
                titles => {
                    this.titles = titles;
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