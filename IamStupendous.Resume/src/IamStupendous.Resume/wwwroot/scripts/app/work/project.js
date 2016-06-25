System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Project;
    return {
        setters:[],
        execute: function() {
            /**
             * Project Model
             */
            class Project {
                constructor(title, description, roles, technologies) {
                    this.title = title;
                    this.description = description;
                    this.roles = roles;
                    this.technologies = technologies;
                }
            }
            exports_1("Project", Project);
        }
    }
});
//# sourceMappingURL=project.js.map