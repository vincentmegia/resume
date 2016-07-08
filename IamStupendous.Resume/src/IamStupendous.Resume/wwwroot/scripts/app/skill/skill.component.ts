import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
import { Chart } from './chart';
import { Skill } from './skill';
import { SkillService } from './skill.service';



@Component({
    selector: 'app-skill',
    templateUrl: './scripts/app/skill/skill.component.html',
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [SkillService]
})

export class SkillComponent implements OnInit {
    charts: Array<Chart>;

    constructor(private skillService: SkillService) { }

    /**
     * Skills arrays
     * @param skills
     */
    generateCharts(skills: Skill[]) {
        let charts: Chart[] = [];
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
                    ]));
        }
        return charts;
    }

    /**
     * 
     */
    ngOnInit() {
        let skills = this.skillService
            .getSkills()
            //.then(skills => skills = skills);
        this.charts = this.generateCharts(skills);
    }
}