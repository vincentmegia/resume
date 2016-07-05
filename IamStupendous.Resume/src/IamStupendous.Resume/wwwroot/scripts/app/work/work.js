System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Work;
    return {
        setters:[],
        execute: function() {
            /**
             * Work model
             */
            class Work {
                constructor(company, yearStart, yearEnd, projects) {
                    this.company = company;
                    this.yearStart = yearStart;
                    this.yearEnd = yearEnd;
                    this.projects = projects;
                    this.isOpen = false;
                }
            }
            exports_1("Work", Work);
        }
    }
});
//# sourceMappingURL=work.js.map