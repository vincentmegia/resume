import { Project } from './project'

/**
 * Work model
 */
export class Work {
    public company: string;
    public projects: Project[];
    public yearStart: string;
    public yearEnd: string;
    public isOpen: boolean;

    constructor(company: string,
                yearStart: string,
                yearEnd: string,
                projects: Project[]) {
        this.company = company;
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
        this.projects = projects;
        this.isOpen = false;
    }
}