import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MenuItem  } from './menu-item';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderService {

    private endPoint = 'api/resume/menu-items';

    constructor(private http: Http) {}

    /**
     * 
     */
    getMenuItems(): Observable<Array<MenuItem>> {
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
        let menuItems = new Array<MenuItem>();
        for (let item of payload) {
            let menuItem = MenuItem.create(item);
            menuItems.push(menuItem);
        }
        return menuItems;
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