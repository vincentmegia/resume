import { Project } from './project'

/**
 * Work model
 */
export class Work {
    company: string;
    projects: Array<Project>;
    yearStart: string;
    yearEnd: string;
    isOpen: boolean;

    constructor(company: string,
                yearStart: string,
                yearEnd: string,
                projects: Array<Project>) {
        this.company = company;
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
        this.projects = projects;
        this.isOpen = false;
    }

    /**
     * fromJSON is used to convert an serialized version
     * of the User to an instance of the class
     * @param json
     */
    static create(json: Work): Work {
        // create an instance of the User class
        let work = Object.create(Work.prototype);
        // copy all the fields from the json object
        return Object.assign(work, json, {});
    }
}