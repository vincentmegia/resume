import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
import { Chart } from './chart';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
    selector: 'app-skill',
    templateUrl: './scripts/app/skill/skill.component.html',
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class SkillComponent {
    charts: Chart[];

    constructor() {
        this.charts = [
            new Chart(
                ['Expertise', 'Unknown'],
                [90, 10],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [90, 10],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [50, 50],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [50, 50],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [80, 20],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [70, 30],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [70, 30],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [70, 30],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [70, 30],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ]),
            new Chart(
                ['Expertise', 'Unknown'],
                [70, 30],
                'doughnut',
                {
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
                },
                [
                    { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                ])
        ];

        if (this.charts[9] === undefined)
            console.log("9 is undefined")
        if (this.charts[10] === undefined)
            console.log("10 is undefined")
        if (this.charts[11] === undefined)
            console.log("11 is undefined")
    }
}
