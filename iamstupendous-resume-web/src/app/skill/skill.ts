/**
 * Skill model class
 */
export class Skill {
	name: string;
	expertise: number;
	unknown?: number;

	constructor(name: string, expertise: number, unknown: number) {
		this.name = name;
		this.expertise = expertise;
		this.unknown = 100 - expertise;
	}

	/**
	 * fromJSON is used to convert an serialized version
	 * of the User to an instance of the class
	 * @param json
	 */
	static create(json: Skill): Skill {
		// create an instance of the User class
		let skill = Object.create(Skill.prototype);
		// copy all the fields from the json object
		return Object.assign(skill, json, {});
	}
}
