import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MenuItem  } from './menu-item';
import { Observable } from 'rxjs/Observable';

//import { MENUITEMS } from './mock-menu-items';

@Injectable()
export class HeaderService {

    private menuItemUrlEndPoint = 'api/resume';

    constructor(private http: Http) {}

    /**
     * 
     */
    getMenuItems(): Observable<Array<MenuItem>> {
        return this.http.get(this.menuItemUrlEndPoint)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * 
     * @param res
     */
    private extractData(response: Response) {
        let body = response.json();
        
        return body || {};
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