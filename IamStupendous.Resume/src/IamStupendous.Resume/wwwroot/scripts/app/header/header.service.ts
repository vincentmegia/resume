import { Injectable } from '@angular/core';
import { MENUITEMS } from './mock-menu-items';

@Injectable()
export class HeaderService {
    /**
     *
     */
    getMenuItems() {
        return MENUITEMS;
    }
}