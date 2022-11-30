import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Title } from "./title";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { of } from "rxjs";

@Injectable()
export class TitleService {
	private endPoint = environment.apiEndpoint + "titles";

	constructor(private http: Http) {}

	/**
	 *
	 */
	getTitles(): Observable<Array<Title>> {
		// return this.http.get(this.endPoint)
		//     .pipe(map(this.deserialize));
		return of([
			{
				name: "Vincent Megia",
				description: "Senior Software Engineer",
				email: "vincent.megia@gmail.com",
			},
		]);
	}

	/**
	 *
	 * @param res
	 */
	private deserialize(response: Response) {
		let payload = response.json();
		let titles = new Array<Title>();
		for (let item of payload) {
			let title = Title.create(item);
			titles.push(title);
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
		let errMsg = error.message
			? error.message
			: error.status
			? "${error.status} - ${error.statusText}"
			: "Server error";
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}
