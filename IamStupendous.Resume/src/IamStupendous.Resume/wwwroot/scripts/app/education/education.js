System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Education;
    return {
        setters:[],
        execute: function() {
            /**
             * Education Model
             */
            class Education {
                constructor(school, degree, yearStart, yearEnd) {
                    this.school = school;
                    this.degree = degree;
                    this.yearStart = yearStart;
                    this.yearEnd = yearEnd;
                }
            }
            exports_1("Education", Education);
        }
    }
});
//# sourceMappingURL=education.js.map