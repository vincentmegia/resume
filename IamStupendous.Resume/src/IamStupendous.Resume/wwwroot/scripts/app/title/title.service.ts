import { Injectable } from '@angular/core';
import { TITLES } from './mock-title';

@Injectable()
export class TitleService {
    /**
     * 
     */
    getTitles() {
        return TITLES;
    }
}