/**
 * Summary model class
 */
export class Summary {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    /**
     * fromJSON is used to convert an serialized version
     * of the User to an instance of the class
     * @param json
     */
    static create(json: Summary): Summary {
        // create an instance of the User class
        let summary = Object.create(Summary.prototype);
        // copy all the fields from the json object
        return Object.assign(summary, json, {});
    }
}