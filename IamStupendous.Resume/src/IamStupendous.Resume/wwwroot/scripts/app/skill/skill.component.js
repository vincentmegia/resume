System.register(['@angular/core', '@angular/common', 'ng2-charts/ng2-charts', './chart'], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_charts_1, chart_1;
    var SkillComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_charts_1_1) {
                ng2_charts_1 = ng2_charts_1_1;
            },
            function (chart_1_1) {
                chart_1 = chart_1_1;
            }],
        execute: function() {
            let SkillComponent = class SkillComponent {
                constructor() {
                    this.charts = [
                        new chart_1.Chart(['Expertise', 'Unknown'], [90, 10], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'C#',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [90, 10], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'Asp.Net MVC',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [50, 50], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'WCF',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [50, 50], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'SpringNET',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [80, 20], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'Javascript',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [70, 30], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'Bootstrap',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [70, 30], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'AngularJS',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [70, 30], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'JQuery',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [70, 30], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 70,
                            title: {
                                display: true,
                                text: 'WebSockets',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ]),
                        new chart_1.Chart(['Expertise', 'Unknown'], [70, 30], 'doughnut', {
                            responsive: true,
                            cutoutPercentage: 80,
                            title: {
                                display: true,
                                text: 'SQL Server',
                                fontSize: 18,
                                fontColor: '#ffffff'
                            },
                            legend: {
                                display: true,
                                labels: {
                                    fontColor: '#ffffff'
                                }
                            }
                        }, [
                            { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                        ])
                    ];
                    if (this.charts[9] === undefined)
                        console.log("9 is undefined");
                    if (this.charts[10] === undefined)
                        console.log("10 is undefined");
                    if (this.charts[11] === undefined)
                        console.log("11 is undefined");
                }
            };
            SkillComponent = __decorate([
                core_1.Component({
                    selector: 'app-skill',
                    templateUrl: './scripts/app/skill/skill.component.html',
                    directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], SkillComponent);
            exports_1("SkillComponent", SkillComponent);
        }
    }
});
//# sourceMappingURL=skill.component.js.map