import { Injectable } from '@angular/core';
import { SUMMARIES } from './mock-summaries';

@Injectable()
export class SummaryService {
    /**
     * 
     */
    getSummaries() {
        return SUMMARIES;
    }
}