System.register(['@angular/core', './education'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, education_1, core_2;
    var EducationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (education_1_1) {
                education_1 = education_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            let EducationComponent = class EducationComponent {
                constructor() {
                    this.educations = [];
                    this.educations.push(new education_1.Education("De La Salle University", "Bachelor of Science in Computer Science", "1997", "2002"));
                }
            };
            EducationComponent = __decorate([
                core_1.Component({
                    selector: 'app-education',
                    templateUrl: './scripts/app/education/education.component.html'
                }), 
                __metadata('design:paramtypes', [])
            ], EducationComponent);
            exports_1("EducationComponent", EducationComponent);
        }
    }
});
//# sourceMappingURL=education.component.js.map