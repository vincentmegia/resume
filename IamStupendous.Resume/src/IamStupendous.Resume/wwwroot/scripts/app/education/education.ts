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
}