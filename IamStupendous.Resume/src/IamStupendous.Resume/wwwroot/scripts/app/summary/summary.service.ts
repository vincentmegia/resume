import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Summary } from './summary';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SummaryService {

    private endPoint = 'api/resume';

    constructor(private http: Http) { }

    /**
     * 
     */
    getSummaries(): Observable<Array<Summary>> {
        return this.http.get(this.endPoint)
            .map(this.deserialize)
            .catch(this.handleError);
    }

    /**
     * 
     * @param res
     */
    private deserialize(response: Response) {
        let payload = response.json();
        let summaries= new Array<Summary>();
        for (let summary of payload.summaries) {
            let item = Summary.create(summary);
            summaries.push(item);
        }
        return summaries;
    }

    /**
     * 
     * @param error
     */
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message)
            ? error.message
            : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}