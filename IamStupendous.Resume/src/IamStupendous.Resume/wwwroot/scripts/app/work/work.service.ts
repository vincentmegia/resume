import { Injectable } from '@angular/core';
import { WORKS } from './mock-works';

@Injectable()
export class WorkService {
    /**
     * 
     */
    getWorks() {
        return WORKS;
    }
}