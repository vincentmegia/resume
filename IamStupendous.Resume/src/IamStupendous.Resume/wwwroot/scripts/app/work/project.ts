import { Role } from './role';

/**
 * Project Model
 */
export class Project {
    title: string;
    description: string;
    roles: Role[];
    technologies: string;

    constructor(title: string,
                description: string,
                roles: Role[],
                technologies: string) {
        this.title = title;
        this.description = description;
        this.roles = roles;
        this.technologies = technologies;
    }
}