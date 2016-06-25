System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Chart;
    return {
        setters:[],
        execute: function() {
            /**
             * Chart model class
             */
            class Chart {
                constructor(labels, data, type, options, colors) {
                    this.labels = labels;
                    this.data = data;
                    this.type = type;
                    this.options = options;
                    this.colors = colors;
                }
            }
            exports_1("Chart", Chart);
        }
    }
});
//# sourceMappingURL=chart.js.map