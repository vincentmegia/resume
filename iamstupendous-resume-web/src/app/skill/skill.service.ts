import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Skill } from "./skill";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { of } from "rxjs";

@Injectable()
export class SkillService {
	private endPoint = environment.apiEndpoint + "skills";

	constructor(private http: Http) {}

	/**
	 *
	 */
	getSkills(): Observable<Array<Skill>> {
		// return this.http.get(this.endPoint)
		//     .pipe(map(this.deserialize));
		return of([
			{
				name: "Java J2EE",
				expertise: 90,
			},
			// {
			// 	name: "Javascript",
			// 	expertise: 80,
			// },
			// {
			// 	name: "Spring Boot",
			// 	expertise: 70,
			// },
			// {
			// 	name: "Angular",
			// 	expertise: 90,
			// },
			// {
			// 	name: "Bootstrap",
			// 	expertise: 80,
			// },
			// {
			// 	name: "Nodejs",
			// 	expertise: 60,
			// },
			// {
			// 	name: "Deno",
			// 	expertise: 50,
			// },
			// {
			// 	name: "Webpack",
			// 	expertise: 60,
			// },
			// {
			// 	name: "WebSockets",
			// 	expertise: 70,
			// },
			// {
			// 	name: "GIT",
			// 	expertise: 70,
			// },
			// {
			// 	name: "Jenkins",
			// 	expertise: 90,
			// },
			// {
			// 	name: "Swagger",
			// 	expertise: 50,
			// },
			// {
			// 	name: "Docker",
			// 	expertise: 70,
			// },
			// {
			// 	name: "Maven",
			// 	expertise: 80,
			// },
			// {
			// 	name: "Autosys",
			// 	expertise: 90,
			// },
			// {
			// 	name: "Control-M",
			// 	expertise: 90,
			// },
			// {
			// 	name: "Crystal Reports",
			// 	expertise: 90,
			// },
			// {
			// 	name: "MS SQL Server Reporting Services",
			// 	expertise: 90,
			// },
			// {
			// 	name: "MS SQL Server",
			// 	expertise: 90,
			// },
			// {
			// 	name: "Oracle",
			// 	expertise: 70,
			// },
			// {
			// 	name: "CouchDb",
			// 	expertise: 80,
			// },
			// {
			// 	name: "Spring",
			// 	expertise: 90,
			// },
			// {
			// 	name: "AKKA",
			// 	expertise: 70,
			// },
			// {
			// 	name: "Hibernate",
			// 	expertise: 60,
			// },
			// {
			// 	name: "Apache Camel",
			// 	expertise: 80,
			// },
			// {
			// 	name: "RabbitMQ",
			// 	expertise: 70,
			// },
			// {
			// 	name: "IBM Websphere MQ",
			// 	expertise: 70,
			// },
		]);
	}

	/**
	 *
	 * @param res
	 */
	private deserialize(response: Response) {
		let payload = response.json();
		let skills = new Array<Skill>();
		for (let item of payload) {
			let skill = Skill.create(item);
			skills.push(skill);
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
		let errMsg = error.message
			? error.message
			: error.status
			? "${error.status} - ${error.statusText}"
			: "Server error";
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}
