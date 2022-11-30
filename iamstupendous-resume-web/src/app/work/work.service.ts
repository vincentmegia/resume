import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Work } from "./work";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { of } from "rxjs";

@Injectable()
export class WorkService {
	private endPoint = environment.apiEndpoint + "works";

	constructor(private http: Http) {}

	/**
	 *
	 */
	getWorks(): Observable<Array<Work>> {
		// return this.http.get(this.endPoint)
		//     .pipe(map(this.deserialize));
		return of([
			{
				company: "Paypal",
				projects: [
					{
						title: "QRCGATEWAY REST API",
						description:
							"QR Code(QRC) gateway API is an orchestration layer for all US PayPal QRC mobile scanning transactions. The initiative is to cut down the time spent by customers when transacting with merchants by scan to pay transactions.",
						roles: [
							{
								title: "MTS 1 Software Engineer",
								responsibilities: [
									"Liase with Product Owner for requirements gathering activities",
									"Develop high quality code",
									"Document and perform unit and API E2E test",
								],
							},
						],
						technologies:
							"Java, SpringBoot, Jenkins, Lombok, Docker containers",
					},
					{
						title: "CFS CardLifecycle API",
						description:
							"CFS CardLicycle acts as the orchestration service for PayPal cards such as BDMC, PayPal Cash Card and PayPal Key. It also performs orchestration for Google, Apple and Andriod Pay",
						roles: [
							{
								title: "MTS 1 Software Engineer",
								responsibilities: [
									"Liase with Product Owner for requirements gathering activities",
									"Develop high quality code",
									"Document and perform unit and API E2E test",
								],
							},
						],
						technologies:
							"Java, SpringBoot, Jenkins, Lombok, Docker containers",
					},
					{
						title: "CFS Unified Card Daemon",
						description:
							"CFS Unified Cards is a backend event messaging consuming Daemon that process events and transactions, Simple events are processed and relayed to a notifications platform responsible for creating SMS, Email or Push notifications,\n                            Transaction messages is also processed and enriched before relayed to downstream api services.",
						roles: [
							{
								title: "MTS 1 Software Engineer",
								responsibilities: [
									"Liase with Product Owner for requirements gathering activities",
									"Develop high quality code",
									"Document and perform unit and API E2E test",
								],
							},
						],
						technologies:
							"Java, SpringBoot, Jenkins, Lombok, Docker containers",
					},
				],
				yearStart: "2020-10-26T00:00:00",
				yearEnd: null,
				isOpen: false,
			},
			{
				company: "Sofgen",
				projects: [
					{
						title: "CHARLES RIVER ORDER WORKFLOW COMPONENTS",
						description:
							"Charles River has a rich set of APIs that enables the business to implement highly tailored components to customize user experience and help design business aligned back end services.",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Manages critical custom order workflow components written in .NET/C#  for Charles River IMST.",
									"Developed/Tested/Delivered Custom Blotter Actions Send to Trading CBA – Productionized a convenient execution button that runs the order thru a series of business driven rule engine that checks the validity of an order before executing to liquidity provider.",
									"Developed/Tested/Delivered Allocate CBA – Delivered an allocation button for manual execution trades, block trades that are received from liquidity providers are fed thru a gateway that creates the execution for the order.",
									"Developed/Tested/Delivered Back 2 Back FX – Delivered WCF service that manages FX/FX Forwards for accounts having risk exposure to different currency.",
									"Developed/Tested/Delivered Model Deviation – Delivered WCF service that detects if a given GIML accounts will go beyond the portfolio model before an order is created.",
								],
							},
						],
						technologies:
							"C#, Unity Container, Windows Forms, Windows Communication Foundation, Git, Teamcity, SQL Server, JIRA, Springnet",
					},
				],
				yearStart: "2016-12-01T00:00:00",
				yearEnd: "2020-10-24T00:00:00",
				isOpen: false,
			},
			{
				company: "BARCLAYS CAPITAL",
				projects: [
					{
						title: "VESTIMA FUNDS ONBOARDING",
						description:
							"Charles River integration with Vestima provided a gateway to global funds solutions ranging from order routing, centralized delivery versus payment (DVP) settlement, safekeeping and asset servicing to collateral management. Private bankers manages creates orders by Charles river that is routed to Vestima fund solution by communicating thru SWIFT banking protocol. Played the key role in delivering complex backend system",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Liaised with Business Analyst in translating functional specification to technical specification",
									"Attended regular scrum call to discuss timeline of deliverables",
									"Developed ETL transformation layer using ULLink to convert Charles River FIX 4.4 messages to Swift XML specification.",
									"Developed Java component that transforms Swift XML to Swift banking protocol using Spring and WIFE libraries",
									"Improved logging of Feeds gateway actors for production support and visibility written in Java and Spring",
									"Attended regular meetings with testing team and supports Users Acceptance testing phase",
									"Maintained SIT and UAT environments",
									"Wrote automated unit test using NUnit",
									"Maintained Team City build configurations",
								],
							},
						],
						technologies:
							"Java, Spring, Perforce, Teamcity, SQL Server, FIX 4.4 protocol., SWIFT protocol, ULLink, IBM Websphere MQ, JIRA",
					},
					{
						title: "CHARLES RIVER ANYWHERE RE-WRITE",
						description:
							"Charles River Anyhwere is the web platform version of Charles River which primarily used by Private Bankers (PB) and Private Banking Executives (PBEs).The re-engineered platform is designed to be lightweight with stunning interface built according to the users most demanding requirements.",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Attended daily scrum calls in UK time zone to capture and translate storyboards and use cases into technical requirements",
									"Closely worked with business in designing iterations of the user interface prototype",
									"Designed initial html user prototype",
									"Designed and developed responsive web user interface using Angular and WebSockets",
									"Developed efficient and scalable back end system written in Java and Spring MVC while leveraging concurrency using AKKA",
									"Maintained SIT and UAT environments",
									"Wrote automated unit test for both front end and backend",
									"Maintained Team City build configurations",
								],
							},
						],
						technologies:
							"Java, Spring MVC Angular, AKKA framework, Perforce, WebSockets, Teamcity, SQL Server, JIRA",
					},
					{
						title: "CHARLES RIVER DATA FEEDS",
						description:
							"Charles River Investment Management System is used heavily by wealth private bankers for its highly sophisticated portfolio management features, Dealers edge the competition by taking advantage of its complex order management execution features. Data feed pumped into Charles River is comprised of highly complex sequence of batches where securities, accounts, positions, currencies, exchanges and FXs data is derived from different source systems. Data undergoes several phase of intense processing of cleansing, filtering, munging, merging and finally canonicalization before pumped into Charles River.",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Attended regular calls with UK counter parts to discuss user requirements and resolve issues or possible issues",
									"Developed and develop Informatica workflows to model and process data (ETL)",
									"Developed SQL Server stored procedure to perform data cleansing, munging, merging and canonicalization",
									"Developed Autosys batch scheduling jobs",
									"Improved erroneous Informatica Workflow manual deployment by replacing with an automated deployment tool",
									"Maintained SIT and UAT environments",
									"Encouraged team members of best practice in coding, source control management and doing things the right way with no shortcuts",
								],
							},
						],
						technologies: "Java, Informatica, Autosys, SVN, ANT, Linux",
					},
					{
						title: "STRATEGIC CLIENT REPORTING MIGRATION",
						description:
							"A genuine reporting solution catered to deliver performance reports to banking clients from mass affluence to high net worth's. The main driver was to move-out of Actuate for cost reasons and move to SAP Business Objects. Delivered the critical web interface and enhanced the reporting engine using multi-threaded approach.",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Attended daily meeting to discuss requirements, resolve issues and mitigate possible exceptions",
									"Designed and developed web reporting interface using Java and Spring MVC tailored to user requirements",
									"Designed and developed quarterly, monthly, weekly and daily enterprise reports",
									"Redesigned existing report engine that generated 8k reports in 2hrs+ reduced to 10mins",
									"Wrote automated unit test",
									"Maintained SIT and UAT environment",
								],
							},
						],
						technologies:
							"Java, Spring, SQL Server 2005, Unity (IoC), Microsoft Enterprise Libraries, SVN, Crystal Report XI and Business Objects",
					},
					{
						title:
							"QUARTERLY PERFORMANCE MONITORING AND ELECTRONIC DISTRIBUTION ENGINE",
						description:
							"QPM is a system that generates benchmark and performance reports for US based high net worth individuals. It takes data from an external company named AXYS where market data are already computed. EDE is a home brew ex- Lehman solution for email engine.Both projects are in BAU mode.",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Attended bi-weekly meeting with US project managers for book of work prioritization",
									"Maintained legacy system",
									"Engaged in level 3 or production support",
								],
							},
						],
						technologies:
							"Java, Spring MVC, SQL Server 2005, Informatica, Unix, Autosys",
					},
				],
				yearStart: "2009-01-01T00:00:00",
				yearEnd: "2016-12-01T00:00:00",
				isOpen: false,
			},
			{
				company: "TANGSPAC CONSULTING",
				projects: [
					{
						title: "CLIENT SUITABILITY PROFILE",
						description:
							"An online application targeted to address SEC rule 3a4. The project consists of an online application that captures suitability and trading restriction information for sales and investment representatives. It also comprises of backend processes that communicates with other system for accounts and asset class specific data and report generating components for operations to consume.",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Attended bi-weekly meeting with US development lead to capture business requirements",
									"Produced functional requirement",
									"Produced technical requirement",
									"Designed and developed iterations of html user interface prototypes",
									"Developed web user interface using Java and Spring",
									"Developed series of small and complex batch components written in Java, Hibernate, Spring to capture and process data from different source systems and stored on SQL Server 2005",
									"Wrote automated unit test using NUnit",
									"Maintained SIT and UAT environment",
									"Engaged in level 3 or production support",
								],
							},
						],
						technologies:
							"Java, Spring MVC, SQL Server 2005, Perforce, Hibernate, JUnit",
					},
				],
				yearStart: "2009-08-01T00:00:00",
				yearEnd: "2010-01-01T00:00:00",
				isOpen: false,
			},
			{
				company: "OPTIMUM SOLUTIONS",
				projects: [
					{
						title: "POST TRADE BOOKING FEEDS BACK-END PROCESS",
						description:
							"Globally In charge of 10 instances that spans across regions of rule based message driven windows service that listen to notifications by Agora order management system that feed trades down to Back office Clearvision.",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Designed and develop enhancements for new TOCOM reconciliation feeds for Japanese Market",
									"Pro - actively joined with BA in requirements gathering and analysis stage to understand feasibility or a tactical solution can be suggested.",
									"Performs peer review with junior developer and trainings for support team for newly developed applications.",
									"Managed database schema, maintained creation scripts, developed change scripts, and written SQL scripts for data correction and deployment of database changes.",
									"2ND Level of escalation for APAC and Europe production related issues.",
									"Coordinates with global team on a weekly basis to perform status reports, brainstorming sessions and impact analysis.",
									"In spare time develops tools that help support team to trouble production issues faster.",
								],
							},
						],
						technologies:
							"Java, Sybase and Oracle, Clearcase, Beyond Compare, DB Artisan. Rapid SQL",
					},
					{
						title: "AGORA TRADE MONITORING TOOL",
						description:
							"A trade-monitoring tool that connects and listen to a highly complex message based real time notification order management system to provide both traders and support team a centralized tool that can easily view positions and executions across different exchanges and multiple platforms.",
						roles: [
							{
								title: "SENIOR SOFTWARE ENGINEER",
								responsibilities: [
									"Refactored and fine-tuned the system to be successfully delivered into production.",
									"Performs coding, pro - actively does peer review, profiling and performance testing of modules created by team members.",
									"Analyses new requirements with team lead to ensure business objectives are met.",
									"Mandates team member on a technical design and brainstorming activities.",
									"Coordinates and assist in UAT testing phase.Coordinates with Configuration Management team in production release and post release application check- outs",
									"2ndl level of escalation in APAC and Europe production related issues.",
									"Performs support team trainings, conducts mock simulation in UAT on how to handle real production issues.",
								],
							},
						],
						technologies: "C# (2.0), Windows Forms, Clearcase",
					},
				],
				yearStart: "2007-11-01T00:00:00",
				yearEnd: "2009-03-01T00:00:00",
				isOpen: false,
			},
			{
				company: "HEADSTRONG PHILIPPINES, INC.",
				projects: [
					{
						title: "NALCO ADVANCED 3D TRASAR",
						description: "",
						roles: [
							{
								title: "TECHNICAL LEAD",
								responsibilities: [
									"Developed the assigned modules for the advanced 3d trasar website",
									"Create or update detailed design documents for assigned modules",
									"Performed unit testing on assigned modules and ensure that these modules are thoroughly tested before submitting",
									"Implemented any bug fixes and enhancements for the advanced 3d trasar website",
									"Raises design/ implementation issues & formulate resolution",
									"Achieved cmmi development metrics as defined for the project",
									"Mentored and coaches other team members.",
								],
							},
							{
								title: "CONFIGURATION MANAGER",
								responsibilities: [
									"Ensured adherence of the team and the project to the configuration management procedures",
									"Responsible for development environment servers: installation and day- to - day operations",
									"Compile and build project releases",
									"Creating baselines for every release",
									"Coordinated with project manager if there are deployment issues",
									"Communicated with team members and assist them if there should be updates made on their local development database.",
									"Implementation, customization and migration of existing process to Team Server Foundation.",
								],
							},
						],
						technologies:
							"Visual Basic (1.1/2.0),  C# (1.1/2.0), ASP.NET (1.0/2.0) SQL Server 2000/2005, Team Server Foundation, Windows SharePoint Services 2.0/3.0",
					},
					{
						title: "NETSUITE CRM DATA MIGRATION",
						description: "",
						roles: [
							{
								title: "AUTOMATION DEVELOPER",
								responsibilities: [
									"Creating automated scripts to increase efficiency and data quality",
									"Involved in handling technical issues with data migration to CRM.",
								],
							},
						],
						technologies: "MySQL, Navicat, MySQL GUI, MySQL Query Browser.",
					},
				],
				yearStart: "2006-09-01T00:00:00",
				yearEnd: "2007-11-01T00:00:00",
				isOpen: false,
			},
			{
				company: "TREND MICRO INC.",
				projects: [
					{
						title: "TREND MICRO ONLINE SECURITY",
						description:
							"Leverage Trend Micro existing consumer products and business process architecture and minimize the time and cost of development to enable ISP partners to resell Trend Micro consumer products to their customers on a monthly subscription basis. ",
						roles: [
							{
								title: "TECHNICAL LEAD",
								responsibilities: [
									"Analysed the technical requirements and ensure that the business objectives are met by the system",
									"Designed and created the Technical Specifications Document",
									"Worked with Project Coordinator to assess the efforts required and manpower allocation",
									"Assess risks in the technical implementation",
									"Coordinated with Project Coordinator, QA Lead and other consumer team members for implementation and issue resolution",
									"In charge of the investigation, diagnosis and resolution of technical issues",
									"Researched, analysed and designed continuous improvements to the technical aspects of the systems",
									"Lead the team in adopting development Best Practices",
									"GISS 2nd Level Escalation for TMSS, 3rd Level Escalation for PCC- SE.",
								],
							},
						],
						technologies:
							"ASP.NET 1.1 C#, SQL Server 2000, BizTalk, Test Director, Dot Project, JavaScript, StarTeam, Windows 2000.",
					},
					{
						title: "TREND MICRO SECURITY SERVICES",
						description:
							"Trend Micro™ Home Network Security is an integrated hardware/software solution that combines Internet security technology built into select models of home routers.",
						roles: [
							{
								title: "TECHNICAL LEAD",
								responsibilities: [
									"Analysed the technical requirements and ensure that the business objectives are met by the system",
									"Designed and created the Technical Specifications Document",
									"Worked with Project Coordinator to assess the efforts required and manpower allocation",
									"Assess risks in the technical implementation",
									"Coordinated with Project Coordinator, QA Lead and other consumer team members for implementation and issue resolution",
									"In charge of the investigation, diagnosis and resolution of technical issues",
									"Researched, analysed and designed continuous improvements to the technical aspects of the systems",
									"Lead the team in adopting development Best Practices",
									"GISS 2nd Level Escalation for TMSS, 3rd Level Escalation for PCC- SE",
								],
							},
						],
						technologies:
							"ASP.NET 1.1, C#, SQL Server 2000, BizTalk, Test Director, Dot Project, JavaScript, StarTeam, Windows 2000.",
					},
				],
				yearStart: "2004-12-01T00:00:00",
				yearEnd: "2006-07-01T00:00:00",
				isOpen: false,
			},
			{
				company: "SOFTWARE LABORATORIES",
				projects: [
					{
						title: "ITSI - JGC ON-LINE PAYROLL",
						description:
							"An online system that generates payroll for both overseas and local based workers, It interfaces with two other systems called EWSP and ERS, EWSP is a system that keeps track of loans, and ERS is an Expense report system.",
						roles: [
							{
								title: "TECHNICAL LEAD",
								responsibilities: [
									"Developing modules according to document specification",
									"Develop Reports according to document specification",
									"Introduced Layering and N- Tier Design Pattern and NUnit test tool.",
								],
							},
						],
						technologies:
							"ASP.NET 1.1, C#, SQL Server, Oracle 9i, JavaScript, StarTeam, Visual SourceSafe, Windows XP.",
					},
				],
				yearStart: "2004-03-01T00:00:00",
				yearEnd: "2004-09-01T00:00:00",
				isOpen: false,
			},
			{
				company: "HOUSING RESOURCE DEVELOPMENT PTE",
				projects: [
					{
						title: "NAIS FLAG SYSTEM",
						description:
							"Develop a module that interfaces with a Web Service in Japan using Messaging Queue for transporting data or placing orders.",
						roles: [
							{
								title: "PROGRAMMER",
								responsibilities: [
									"Developing modules according to document specification.",
								],
							},
						],
						technologies:
							"C#, SQL Server, Oracle 8i, Visual SourceSafe, Windows 2000.",
					},
					{
						title: "WAREHOUSE MANAGEMENT SYSTEM",
						description:
							"A Small project that keeps track of warehouse processes and shipments of orders. ",
						roles: [
							{
								title: "PROGRAMMER",
								responsibilities: [
									"Developing modules according to document specification.",
								],
							},
						],
						technologies: "C#, SQL Server, Visual SourceSafe, Windows 2000.",
					},
				],
				yearStart: "2003-07-01T00:00:00",
				yearEnd: "2004-01-01T00:00:00",
				isOpen: false,
			},
			{
				company: "ONLINE SOLUTION TECHNOLOGIES",
				projects: [
					{
						title: "ST. THERESA'S ACCOUNTING SYSTEM",
						description:
							"Automated system that assist faculties in enrolment and other processes to speed up transactions. Modified the system and reports according to client's request.",
						roles: [
							{
								title: "PROGRAMMER",
								responsibilities: [
									"Maintenance of legacy system",
									"Supervising small projects and training junior programmers.",
								],
							},
						],
						technologies: "Visual Basic 6, SQL Server 2000, Windows XP.",
					},
				],
				yearStart: "2003-01-01T00:00:00",
				yearEnd: "2003-03-01T00:00:00",
				isOpen: false,
			},
		]);
	}

	/**
	 *
	 * @param res
	 */
	private deserialize(response: Response) {
		let payload = response.json();
		let works = new Array<Work>();
		for (let item of payload) {
			let work = Work.create(item);
			works.push(work);
		}
		return works;
	}

	/**
	 *
	 * @param error
	 */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = error.message
			? error.message
			: error.status
			? "${error.status} - ${error.statusText}"
			: "Server error";
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}
