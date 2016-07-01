System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var SummaryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            let SummaryComponent = class SummaryComponent {
                constructor() {
                    this.descriptions = [];
                    this.descriptions
                        .push("Over 13+ years of solid software development experience in building highly complex enterprise applications in areas such as multi layered web development using C# or Java, windows development by windows forms or WCF, back-end services based on SOA principles, report generation and data transformation layer (ETL) using Informatica and ULLink.");
                    this.descriptions
                        .push("Over 7+ years of experience working in multi-national financial investment banking giants such as Barclays and Credit Suisse where teams collaboratively work across regions to delivering high quality enterprise applications catered for demanding business in short amount time and high pressure environment.");
                    this.descriptions
                        .push("Good working experience with sophisticated investment platform such as Charles River and Charles River Anywhere.");
                    this.descriptions
                        .push("A highly motivated individual who is constantly learning, able to work to tight deadlines, and who can communicate effectively with technical peers as well as business users. Someone who promotes an environment of learning and the sharing of ideas and is always open looking for new challenges.");
                }
            };
            SummaryComponent = __decorate([
                core_1.Component({
                    selector: 'app-summary',
                    templateUrl: './scripts/app/summary/summary.component.html'
                }), 
                __metadata('design:paramtypes', [])
            ], SummaryComponent);
            exports_1("SummaryComponent", SummaryComponent);
        }
    }
});
//# sourceMappingURL=summary.component.js.map