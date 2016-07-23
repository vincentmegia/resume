import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Work } from './work';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkService {

    private endPoint = 'api/resume';

    constructor(private http: Http) { }

    /**
     * 
     */
    getWorks(): Observable<Array<Work>> {
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
        let works = new Array<Work>();
        for (let work of payload.works) {
            let item = Work.create(work);
            works.push(item);
        }
        return works;
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