/**
 * Education Model
 */
export class Education {
    school: string;
    degree: string;
    yearStart: string;
    yearEnd: string;

    constructor(school: string,
        degree: string,
        yearStart: string,
        yearEnd: string) {
        this.school = school;
        this.degree = degree;
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
    }

    /**
     * fromJSON is used to convert an serialized version
     * of the User to an instance of the class
     * @param json
     */
    static create(json: Education): Education {
        // create an instance of the User class
        let education = Object.create(Education.prototype);
        // copy all the fields from the json object
        return Object.assign(education, json, {});
    }
}