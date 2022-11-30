import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Summary } from "./summary";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { of } from "rxjs";

@Injectable()
export class SummaryService {
	private endPoint = environment.apiEndpoint + "summaries";

	constructor(private http: Http) {}

	/**
	 *
	 */
	getSummaries(): Observable<Array<Summary>> {
		// return this.http.get(this.endPoint)
		//     .pipe(map(this.deserialize));
		return of([
			{
				text: "Software engineer with over 18 years experience.",
			},
			{
				text: "10 successful years in full stack development in finance and banking systems.",
			},
			{
				text: "Excellent track record leading and building enterprise systems from the ground up.",
			},
		]);
	}

	/**
	 *
	 * @param res
	 */
	private deserialize(response: Response) {
		let payload = response.json();
		let summaries = new Array<Summary>();
		for (let item of payload) {
			let summary = Summary.create(item);
			summaries.push(summary);
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
		let errMsg = error.message
			? error.message
			: error.status
			? "${error.status} - ${error.statusText}"
			: "Server error";
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}
