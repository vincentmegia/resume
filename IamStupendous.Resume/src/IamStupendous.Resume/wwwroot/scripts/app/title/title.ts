/**
 * Title model class
 */
export class Title {
    name: string;
    description: string;
    email: string;
    state: string;

    constructor(name: string,
                description: string,
                email: string) {
        this.name = name;
        this.description = description;
        this.email = email;
        this.state = '*';
    }
}