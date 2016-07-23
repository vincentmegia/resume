/**
 * Chart model class
 */
export class Chart {
    labels: Array<string>;
    data: Array<number>;
    type: string;
    options: any;
    colors: Array<any>;

    constructor(labels: Array<string>,
                data: Array<number>,
                type: string,
                options: any,
                colors: Array<any>) {
        this.labels = labels;
        this.data = data;
        this.type = type;
        this.options = options;
        this.colors = colors;
    }
}