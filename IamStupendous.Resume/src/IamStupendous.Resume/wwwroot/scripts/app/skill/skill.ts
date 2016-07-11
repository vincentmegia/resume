/**
 * Skill model class
 */
export class Skill {
    name: string;
    expertise: number;
    unknown: number;

    constructor(name: string,
                expertise: number) {
        this.name = name;
        this.expertise = expertise;
        this.unknown = 100 - this.expertise;
    }
}