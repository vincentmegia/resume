/**
 * Role model class
 */
export class Role {
    title: string;
    responsibilities: Array<string>;

    constructor(title: string,
        responsibilities: Array<string>) {
        this.title = title;
        this.responsibilities = responsibilities;
    }

    /**
     * fromJSON is used to convert an serialized version
     * of the User to an instance of the class
     * @param json
     */
    static create(json: Role): Role {
        // create an instance of the User class
        let role = Object.create(Role.prototype);
        // copy all the fields from the json object
        return Object.assign(role, json, {});
    }
}