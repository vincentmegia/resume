/**
 * Skill model class
 */
export class Skill {
    public name: string;
    public expertise: number;
    public unknown: number;

    constructor(name: string,
                expertise: number) {
        this.name = name;
        this.expertise = expertise;
        this.unknown = 100 - this.expertise;
    }
}