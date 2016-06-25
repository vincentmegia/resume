/**
 * Role model class
 */
export class Role {
    title: string;
    responsibilities: string[];

    constructor(title: string,
                responsibilities: string[]) {
        this.title = title;
        this.responsibilities = responsibilities;
    }
}