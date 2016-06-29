import { Component } from '@angular/core';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
    selector: 'app-title',
    templateUrl: './scripts/app/title/title.component.html'
})

export class TitleComponent {
    name: string;
    description: string;
    email: string;

    constructor() {
        this.name = "Vincent Gatchalian Megia";
        this.description = "Software Engineer";
        this.email = "vincent.megia@gmail.com";
    }
}