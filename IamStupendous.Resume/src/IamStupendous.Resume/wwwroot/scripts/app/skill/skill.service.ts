import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Skill } from './skill';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SkillService {

    private endPoint = 'api/resume';

    constructor(private http: Http) { }

    /**
     * 
     */
    getSkills(): Observable<Array<Skill>> {
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
        let skills = new Array<Skill>();
        for (let skill of payload.skills) {
            let item = Skill.create(skill);
            skills.push(item);
        }
        return skills;
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