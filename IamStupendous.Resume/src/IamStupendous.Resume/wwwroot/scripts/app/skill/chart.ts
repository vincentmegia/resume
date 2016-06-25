/**
 * Chart model class
 */
export class Chart {
    labels: string[];
    data: number[];
    type: string;
    options: any;
    colors: any[];

    constructor(labels: string[],
                data: number[],
                type: string,
                options: any,
                colors: any[]) {
        this.labels = labels;
        this.data = data;
        this.type = type;
        this.options = options;
        this.colors = colors;
    }
}