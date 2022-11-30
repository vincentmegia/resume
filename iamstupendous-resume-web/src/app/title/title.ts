/**
 * Title model class
 */
export class Title {
	name: string;
	description: string;
	email: string;
	state?: string;

	constructor(name: string, description: string, email: string) {
		this.name = name;
		this.description = description;
		this.email = email;
		this.state = "*";
	}

	/**
	 * fromJSON is used to convert an serialized version
	 * of the User to an instance of the class
	 * @param json
	 */
	static create(json: Title): Title {
		// create an instance of the User class
		let title = Object.create(Title.prototype);
		// copy all the fields from the json object
		return Object.assign(title, json, {});
	}
}
