import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { HeaderService } from './header.service';
import { MenuItem } from './menu-item';

@Component({
    selector: 'app-header',
    templateUrl: './scripts/app/header/header.component.html',
    providers: [HeaderService],
    animations: [
        trigger('menuState', [
            state('inactive', style({
                transform: 'scale(1)'
            })),
            state('active', style({
                transform: 'scale(1.3)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})

export class HeaderComponent implements OnInit {
    menuItems: Array<MenuItem>;
    errorMessage: string;

    constructor(private headerService: HeaderService) { }

    /**
     * 
     */
    getMenuItems() {
        this.headerService
            .getMenuItems()
            .subscribe(
                menuItems => {
                    this.menuItems = menuItems;
                    console.log(menuItems);
                },
                error => {
                    this.errorMessage = <any>error;
                    console.log(this.errorMessage);
                });
    }

    /**
     * 
     * @param menuItem
     */
    toggle(selectedMenuItem: MenuItem) {
        selectedMenuItem.toggle();
        for (let menuItem of this.menuItems) {
            if (menuItem.id === selectedMenuItem.id) continue;
            menuItem.toggleInactive();
        } 
    }

    /**
     * 
     */
    ngOnInit() {
        this.getMenuItems();
    }
}