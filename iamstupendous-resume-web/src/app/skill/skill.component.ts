import { Component, OnInit } from "@angular/core";
import { Chart } from "./chart";
import { Skill } from "./skill";
import { SkillService } from "./skill.service";

@Component({
	selector: "app-skill",
	templateUrl: "./skill.component.html",
	providers: [SkillService],
})
export class SkillComponent implements OnInit {
	charts: Array<Chart>;
	errorMessage: string;

	constructor(private skillService: SkillService) {
		this.charts = Array<Chart>();
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
					["Expertise", "Unknown"],
					[skill.expertise, 100 - skill.expertise],
					"doughnut",
					{
						responsive: false,
						cutoutPercentage: 70,
						title: {
							display: true,
							text: skill.name,
							fontSize: 18,
							fontColor: "black",
						},
						legend: {
							display: true,
							labels: {
								fontColor: "black",
							},
						},
					},
					[{ backgroundColor: ["grey", "#ecf0f1"] }]
				)
			);
		}
		return charts;
	}

	/**
	 *
	 */
	getSkills() {
		let skills: Array<Skill>;
		this.skillService.getSkills().subscribe(
			(items) => {
				skills = items;
				this.charts = this.generateCharts(skills);
			},
			(error) => {
				this.errorMessage = <any>error;
				console.log(this.errorMessage);
			}
		);
	}

	/**
	 *
	 */
	ngOnInit() {
		this.getSkills();
	}
}
