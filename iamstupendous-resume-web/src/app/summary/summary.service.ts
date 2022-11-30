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
				text: "17+ years experience in total information technology experience. ",
			},
			{
				text: "10+ years experience in Fullstack software development using Java and Spring for server side, HTML, Bootstrap, Angular thru Typescript for UI, webpack and npm for deployment and dependency management. Writes web unit test cases using Selenium if time permits. Spends a lot of time producing clean code and good in designing prototype layouts.",
			},
			{
				text: "5+ years experience in enterprise development using WPF for front end and WCF as rest service. Great understanding of enterprise bus messaging and good in writing re-usable clean code.",
			},
			{
				text: "1+ year experience writing micro services using Python and Flask and repository management using GIT and Docker.",
			},
			{
				text: "12+ years experience working for multinational banks, implementing a range of technologies from enterprise/service-oriented architecture, to supporting legacy proprietary trading systems. Strong domain knowledge in Equities, and has a good understanding of investment management platforms such as Charles River.",
			},
			{
				text: "Worked for Barclays from 2009 in Wealth Management department on a number of streams in project focused around buy side product Charles River IMST. Three of the big streams would be  Charles River Enhanced Workflow, Avaloq Vestima Funds Onboarding by STP and Charles River Anywhere Re-Write.",
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
