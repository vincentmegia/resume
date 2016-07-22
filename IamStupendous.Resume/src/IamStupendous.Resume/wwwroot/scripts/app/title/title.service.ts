import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Title } from './title';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TitleService {

    private endPoint = 'api/resume';

    constructor(private http: Http) { }

    /**
     * 
     */
    getTitles(): Observable<Array<Title>> {
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
        let titles: Array<Title> = [];
        for (let title of payload.titles) {
            let item = Title.create(title);
            titles.push(item);
        }
        return titles;
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