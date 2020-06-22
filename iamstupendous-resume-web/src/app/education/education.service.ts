import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Education } from './education';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class EducationService {

    private endPoint = environment.apiEndpoint + 'educations';

    constructor(private http: Http) { }

    /**
     * 
     */
    getEducations(): Observable<Array<Education>> {
        return this.http.get(this.endPoint)
            .pipe(map(this.deserialize));
    }

    /**
     * 
     * @param res
     */
    private deserialize(response: Response) {
        let payload = response.json();
        let educations = new Array<Education>();
        for (let item of payload) {
            let education = Education.create(item);
            educations.push(education);
        }
        return educations;
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