System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Role;
    return {
        setters:[],
        execute: function() {
            /**
             * Role model class
             */
            class Role {
                constructor(title, responsibilities) {
                    this.title = title;
                    this.responsibilities = responsibilities;
                }
            }
            exports_1("Role", Role);
        }
    }
});
//# sourceMappingURL=role.js.map