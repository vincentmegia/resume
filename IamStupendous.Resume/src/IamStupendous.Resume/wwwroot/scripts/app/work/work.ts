import { Project } from './project'

/**
 * Work model
 */
export class Work {
    company: string;
    projects: Project[];
    yearStart: string;
    yearEnd: string;

    constructor(company: string,
                yearStart: string,
                yearEnd: string,
                projects: Project[]) {
        this.company = company;
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
        this.projects = projects;
    }
}