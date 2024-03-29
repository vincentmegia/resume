import { Role } from "./role";

/**
 * Project Model
 */
export class Project {
	title: string;
	description: string;
	description1?: string;
	description2?: string;
	description3?: string;
	roles: Array<Role>;
	technologies: string;

	constructor(
		title: string,
		description: string,
		description1: string,
		description2: string,
		description3: string,
		roles: Array<Role>,
		technologies: string
	) {
		this.title = title;
		this.description = description;
		this.description1 = description1
		this.description2 = description2
		this.description3 = description3
		this.roles = roles;
		this.technologies = technologies;
	}

	/**
	 * fromJSON is used to convert an serialized version
	 * of the User to an instance of the class
	 * @param json
	 */
	static create(json: Project): Project {
		// create an instance of the User class
		let project = Object.create(Project.prototype);
		// copy all the fields from the json object
		return Object.assign(project, json, {});
	}
}
