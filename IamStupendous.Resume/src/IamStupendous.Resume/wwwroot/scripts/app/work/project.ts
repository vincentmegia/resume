import { Role } from './role';

/**
 * Project Model
 */
export class Project {
    public title: string;
    public description: string;
    public roles: Role[];
    public technologies: string;
    public isOpen: boolean;

    constructor(title: string,
                description: string,
                roles: Role[],
                technologies: string) {
        this.title = title;
        this.description = description;
        this.roles = roles;
        this.technologies = technologies;
        this.isOpen = false;
    }
}