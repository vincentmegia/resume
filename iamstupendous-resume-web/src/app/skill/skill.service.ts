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
				unknown: 10,
			},
			{
				name: "C#",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Python",
				expertise: 60,
				unknown: 40,
			},
			{
				name: "Javascript",
				expertise: 60,
				unknown: 40,
			},
			{
				name: "Asp.Net Core",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "Spring Boot",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "JQuery",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "Angular",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Bootstrap",
				expertise: 80,
				unknown: 20,
			},
			{
				name: "Nodejs",
				expertise: 60,
				unknown: 40,
			},
			{
				name: "Deno",
				expertise: 50,
				unknown: 50,
			},
			{
				name: "Webpack",
				expertise: 60,
				unknown: 40,
			},
			{
				name: "WebSockets",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "GIT",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "Perfoce",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "ClearCase",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "Teamcity",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Swagger",
				expertise: 50,
				unknown: 50,
			},
			{
				name: "Docker",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "Maven",
				expertise: 80,
				unknown: 20,
			},
			{
				name: "Ant",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Autosys",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Control-M",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Crystal Reports",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "MS SQL Server Reporting Services",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "MS SQL Server",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Oracle",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "CouchDb",
				expertise: 80,
				unknown: 20,
			},
			{
				name: "NUnit",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "AutoMapper",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Nuget",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Spring .NET",
				expertise: 70,
				unknown: 30,
			},
			{
				name: ".Net Core",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "AKKA .Net",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "NHibernate",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "JUnit",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "Spring",
				expertise: 90,
				unknown: 10,
			},
			{
				name: "AKKA",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "Hibernate",
				expertise: 60,
				unknown: 40,
			},
			{
				name: "Apache Camel",
				expertise: 80,
				unknown: 20,
			},
			{
				name: "Flask",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "Django",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "RabbitMQ",
				expertise: 70,
				unknown: 30,
			},
			{
				name: "IBM Websphere MQ",
				expertise: 70,
				unknown: 30,
			},
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
