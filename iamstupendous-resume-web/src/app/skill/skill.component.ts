import { Component, OnInit } from '@angular/core';
import { Chart } from './chart';
import { Skill } from './skill';
import { SkillService } from './skill.service';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    providers: [SkillService]
})

export class SkillComponent implements OnInit {
    charts: Array<Chart>;
    errorMessage: string;

    constructor(private skillService: SkillService) {
        this.charts = Array<Chart>();
        console.log("skill component constructor");
    }

    /**
     * Skills arrays
     * @param skills
     */
    generateCharts(skills: Array<Skill>) {
        let charts = new Array<Chart>();
        for (let skill of skills) {
            charts.push(
                new Chart(
                    ['Expertise', 'Unknown'],
                    [skill.expertise, skill.unknown],
                    'doughnut',
                    {
                        responsive: true,
                        cutoutPercentage: 70,
                        title: {
                            display: true,
                            text: skill.name,
                            fontSize: 18,
                            fontColor: 'black'
                        },
                        legend: {
                            display: true,
                            labels: {
                                fontColor: 'black'
                            }
                        }
                    },
                    [
                        // { backgroundColor: ["#1abc9c", "#ecf0f1"] }
                    ]));
        }
        return charts;
    }

    /**
     * 
     */
    getSkills() {
        let skills: Array<Skill>;
        this.skillService
            .getSkills()
            .subscribe(
                items => {
                    skills = items;
                    console.log(skills);
                    this.charts = this.generateCharts(skills);
                    console.log(this.charts);
                },
                error => {
                    this.errorMessage = <any>error;
                    console.log(this.errorMessage);
                });
    }

    /**
     * 
     */
    ngOnInit() {
        this.getSkills();
    }
}