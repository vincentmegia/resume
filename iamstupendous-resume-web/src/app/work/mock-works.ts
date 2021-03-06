import { Work } from './work';
import { Project } from './project';
import { Role } from './role';

export var WORKS: Array<Work> = [
    new Work("BARCLAYS CAPITAL",
        "JAN2009",
        "PRESENT",
        [
            new Project("VESTIMA FUNDS ONBOARDING",
                "Charles River integration with Vestima provided a gateway to global funds solutions ranging from order routing, centralized delivery versus payment (DVP) settlement, safekeeping and asset servicing to collateral management. Private bankers manages creates orders by Charles river that is routed to Vestima fund solution by communicating thru SWIFT banking protocol. Played the key role in delivering complex backend system",
                [
                    new Role("SENIOR SOFTWARE ENGINEER",
                        [
                            "Liaised with Business Analyst in translating functional specification to technical spefication",
                            "Attended regular scrum call to discuss timeline of deliverables",
                            "Developed ETL transformation layer using ULLink to convert Charles River FIX 4.4 messages to Swift XML specification.",
                            "Developed Java component that transforms Swift XML to Swift banking protocol using Spring and WIFE libraries",
                            "Improved logging of Feeds gateway actors for production support and visibility written in C# and SpringNET",
                            "Attended regular meetings with testing team and supports Users Acceptance testing phase",
                            "Maintained SIT and UAT environments",
                            "Wrote automated unit test using NUnit",
                            "Maintained Team City build configurations"
                        ])
                ],
                "C#, SpringNET, Java, Spring, Perforce, Teamcity, SQL Server, FIX 4.4 protocol., SWIFT protocol, ULLink, IBM Websphere MQ, JIRA"
            ),
            new Project("CHARLES RIVER ANYWHERE RE-WRITE",
                "Charles River Anyhwere is the web platform version of Charles River which primarily used by Private Bankers (PB) and Private Banking Executives (PBEs).The re-engineered platform is designed to be lightweight with stunning interface built according to the users most demanding requirements.",
                [
                    new Role("SENIOR SOFTWARE ENGINEER",
                        [
                            "Attended daily scrum calls in UK time zone to capture and translate storyboards and use cases into technical requirements",
                            "Closely worked with business in designing iterations of the user interface prototype",
                            "Designed initial html user prototype",
                            "Designed and developed responsive web user interface using AngularJS and WebSockets",
                            "Developed efficient and scalable back end system written in Java and Spring MVC while leveraging concurrency using AKKA",
                            "Maintained SIT and UAT environments",
                            "Wrote automated unit test for both front end and backend",
                            "Maintained Team City build configurations"
                        ])
                ],
                "Java, Spring MVC AngularJS, AKKA framework, Perforce, WebSockets, Teamcity, SQL Server, JIRA"
            ),
            new Project("CHARLES RIVER DATA FEEDS",
                "Charles River Investment Management System is used heavily by wealth private bankers for its highly sophisticated portfolio management features, Dealers edge the competition by taking advantage of its complex order management execution features. Data feed pumped into Charles River is comprised of highly complex sequence of batches where securities, accounts, positions, currencies, exchanges and FXs data is derived from different source systems. Data undergoes several phase of intense processing of cleansing, filtering, munging, merging and finally canonicalization before pumped into Charles River.",
                [
                    new Role("SENIOR SOFTWARE ENGINEER",
                        [
                            "Attended regular calls with UK counter parts to discuss user requirements and resolve issues or possible issues",
                            "Developed and develop Informatica workflows to model and process data (ETL)",
                            "Developed SQL Server stored procedure to perform data cleansing, munging, merging and canonicalization",
                            "Developed Autosys batch scheduling jobs",
                            "Improved erroneous Informatica Workflow manual deployment by replacing with an automated deployment tool",
                            "Maintained SIT and UAT environments",
                            "Encouraged team members of best practice in coding, source control management and doing things the right way with no shortcuts"
                        ])
                ],
                "Java, Informatica, Autosys, SVN, ANT, Linux"
            ),
            new Project("STRATEGIC CLIENT REPORTING MIGRATION",
                "A genuine reporting solution catered to deliver performance reports to banking clients from mass affluence to high net worth's. The main driver was to move-out of Actuate for cost reasons and move to SAP Business Objects. Delivered the critical web interface and enhanced the reporting engine using multi-threaded approach.",
                [
                    new Role("SENIOR SOFTWARE ENGINEER",
                        [
                            "Attended daily meeting to discuss requirements, resolve issues and mitigate possible exceptions",
                            "Designed and developed web reporting interface using C# and MVC 2.0 tailored to user requirements",
                            "Designed and developed quarterly, monthly, weekly and daily enterprise reports",
                            "Redesigned existing report engine that generated 8k reports in 2hrs+ reduced to 10mins",
                            "Wrote automated unit test",
                            "Maintained SIT and UAT environment"
                        ])
                ],
                "ASP.NET MVC 2.0, C# (3.5) SQL Server 2005, Unity (IoC), Microsoft Enterprise Libraries, SVN, Crystal Report XI and Business Objects"
            ),
            new Project("QUARTERLY PERFORMANCE MONITORING AND ELECTRONIC DISTRIBUTION ENGINE",
                "QPM is a system that generates benchmark and performance reports for US based high net worth individuals. It takes data from an external company named AXYS where market data are already computed. EDE is a home brew ex- Lehman solution for email engine.Both projects are in BAU mode.",
                [
                    new Role("SENIOR SOFTWARE ENGINEER",
                        [
                            "Attended bi-weekly meeting with US project managers for book of work prioritization",
                            "Maintained legacy system",
                            "Engaged in level 3 or production support"
                        ])
                ],
                "ASP.NET 2.0, C# (3.5) SQL Server 2005, Informatica, Unix, Autosys"
            )
        ]),
    //TANGSPAC
    new Work("TANGSPAC CONSULTING",
        "AUG2009",
        "JAN2010",
        [
            new Project("CLIENT SUITABILITY PROFILE",
                "An online application targeted to address SEC rule 3a4. The project consists of an online application that captures suitability and trading restriction information for sales and investment representatives. It also comprises of backend processes that communicates with other system for accounts and asset class specific data and report generating components for operations to consume.",
                [
                    new Role("SENIOR SOFTWARE ENGINEER",
                        [
                            "Attended bi-weekly meeting with US development lead to capture business requirements",
                            "Produced functional requirement",
                            "Produced technical requirement",
                            "Designed and developed iterations of html user interface prototypes",
                            "Developed web user interface using C# and ASP.NET 2",
                            "Developed series of small and complex batch components written in C#, NHibernate, SpringNET to capture and process data from different source systems and stored on SQL Server 2005",
                            "Wrote automated unit test using NUnit",
                            "Maintained SIT and UAT environment",
                            "Engaged in level 3 or production support"
                        ])
                ],
                "ASP.NET 2.0, C# (3.5) SQL Server 2005, Perforce, NHibernate, SpringNET (IoC and AOP), NUnit"
            )
        ]
    ),

    //OPTIMUM
    new Work("OPTIMUM SOLUTIONS",
        "NOV2007",
        "MAR2009",
        [
            new Project("POST TRADE BOOKING FEEDS BACK-END PROCESS",
                "Globally In charge of 10 instances that spans across regions of rule based message driven windows service that listen to notifications by Agora order management system that feed trades down to Back office Clearvision.",
                [
                    new Role("SENIOR SOFTWARE ENGINEER",
                        [
                            "Designed and develop enhancements for new TOCOM reconciliation feeds for Japanese Market",
                            "Pro - actively joined with BA in requirements gathering and analysis stage to understand feasibility or a tactical solution can be suggested.",
                            "Performs peer review with junior developer and trainings for support team for newly developed applications.",
                            "Managed database schema, maintained creation scripts, developed change scripts, and written SQL scripts for data correction and deployment of database changes.",
                            "2ND Level of escalation for APAC and Europe production related issues.",
                            "Coordinates with global team on a weekly basis to perform status reports, brainstorming sessions and impact analysis.",
                            "In spare time develops tools that help support team to trouble production issues faster."
                        ])
                ],
                "C# (2.0) Sybase and Oracle, Clearcase, Beyond Compare, DB Artisan. Rapid SQL"
            ),
            new Project("AGORA TRADE MONITORING TOOL",
                "A trade-monitoring tool that connects and listen to a highly complex message based real time notification order management system to provide both traders and support team a centralized tool that can easily view positions and executions across different exchanges and multiple platforms.",
                [
                    new Role("SENIOR SOFTWARE ENGINEER",
                        [
                            "Refactored and fine-tuned the system to be successfully delivered into production.",
                            "Performs coding, pro - actively does peer review, profiling and performance testing of modules created by team members.",
                            "Analyses new requirements with team lead to ensure business objectives are met.",
                            "Mandates team member on a technical design and brainstorming activities.",
                            "Coordinates and assist in UAT testing phase.Coordinates with Configuration Management team in production release and post release application check- outs",
                            "2ndl level of escalation in APAC and Europe production related issues.",
                            "Performs support team trainings, conducts mock simulation in UAT on how to handle real production issues.",
                        ])
                ],
                "C# (2.0), Windows Forms, Clearcase"
            )
        ]
    ),

    //HEDSTRONG
    new Work("HEADSTRONG PHILIPPINES, INC.",
        "SEPT2006",
        "NOV2007",
        [
            new Project("NALCO ADVANCED 3D TRASAR",
                "",
                [
                    new Role("TECHNICAL LEAD",
                        [
                            "Developed the assigned modules for the advanced 3d trasar website",
                            "Create or update detailed design documents for assigned modules",
                            "Performed unit testing on assigned modules and ensure that these modules are thoroughly tested before submitting",
                            "Implemented any bug fixes and enhancements for the advanced 3d trasar website",
                            "Raises design/ implementation issues & formulate resolution",
                            "Achieved cmmi development metrics as defined for the project",
                            "Mentored and coaches other team members."
                        ]),
                    new Role("CONFIGURATION MANAGER",
                        [
                            "Ensured adherence of the team and the project to the configuration management procedures",
                            "Responsible for development environment servers: installation and day- to - day operations",
                            "Compile and build project releases",
                            "Creating baselines for every release",
                            "Coordinated with project manager if there are deployment issues",
                            "Communicated with team members and assist them if there should be updates made on their local development database.",
                            "Implementation, customization and migration of existing process to Team Server Foundation."
                        ]),
                ],
                "Visual Basic (1.1/2.0),  C# (1.1/2.0), ASP.NET (1.0/2.0) SQL Server 2000/2005, Team Server Foundation, Windows SharePoint Services 2.0/3.0"
            ),
            new Project("NETSUITE CRM DATA MIGRATION",
                "",
                [
                    new Role("AUTOMATION DEVELOPER",
                        [
                            "Creating automated scripts to increase efficiency and data quality",
                            "Involved in handling technical issues with data migration to CRM."
                        ])
                ],
                "MySQL, Navicat, MySQL GUI, MySQL Query Browser."
            )
        ]
    ),

    //TREND MICRO
    new Work("TREND MICRO INC.",
        "DEC2004",
        "JUL2006",
        [
            new Project("TREND MICRO ONLINE SECURITY",
                "Leverage Trend Micro existing consumer products and business process architecture and minimize the time and cost of development to enable ISP partners to resell Trend Micro consumer products to their customers on a monthly subscription basis. ",
                [
                    new Role("TECHNICAL LEAD",
                        [
                            "Analysed the technical requirements and ensure that the business objectives are met by the system",
                            "Designed and created the Technical Specifications Document",
                            "Worked with Project Coordinator to assess the efforts required and manpower allocation",
                            "Assess risks in the technical implementation",
                            "Coordinated with Project Coordinator, QA Lead and other consumer team members for implementation and issue resolution",
                            "In charge of the investigation, diagnosis and resolution of technical issues",
                            "Researched, analysed and designed continuous improvements to the technical aspects of the systems",
                            "Lead the team in adopting development Best Practices",
                            "GISS 2nd Level Escalation for TMSS, 3rd Level Escalation for PCC- SE."
                        ])
                ],
                "ASP.NET 1.1 C#, SQL Server 2000, BizTalk, Test Director, Dot Project, JavaScript, StarTeam, Windows 2000."
            ),
            new Project("TREND MICRO SECURITY SERVICES",
                "Trend Micro� Home Network Security is an integrated hardware/software solution that combines Internet security technology built into select models of home routers.",
                [
                    new Role("TECHNICAL LEAD",
                        [
                            "Analysed the technical requirements and ensure that the business objectives are met by the system",
                            "Designed and created the Technical Specifications Document",
                            "Worked with Project Coordinator to assess the efforts required and manpower allocation",
                            "Assess risks in the technical implementation",
                            "Coordinated with Project Coordinator, QA Lead and other consumer team members for implementation and issue resolution",
                            "In charge of the investigation, diagnosis and resolution of technical issues",
                            "Researched, analysed and designed continuous improvements to the technical aspects of the systems",
                            "Lead the team in adopting development Best Practices",
                            "GISS 2nd Level Escalation for TMSS, 3rd Level Escalation for PCC- SE",
                        ])
                ],
                "ASP.NET 1.1, C#, SQL Server 2000, BizTalk, Test Director, Dot Project, JavaScript, StarTeam, Windows 2000."
            )
        ]
    ),

    //SOFTWARE LABORATORIES
    new Work("SOFTWARE LABORATORIES",
        "MAR2004",
        "SEP2004",
        [
            new Project("ITSI - JGC ON-LINE PAYROLL",
                "An online system that generates payroll for both overseas and local based workers, It interfaces with two other systems called EWSP and ERS, EWSP is a system that keeps track of loans, and ERS is an Expense report system.",
                [
                    new Role("TECHNICAL LEAD",
                        [
                            "Developing modules according to document specification",
                            "Develop Reports according to document specification",
                            "Introduced Layering and N- Tier Design Pattern and NUnit test tool."
                        ])
                ],
                "ASP.NET 1.1, C#, SQL Server, Oracle 9i, JavaScript, StarTeam, Visual SourceSafe, Windows XP."
            )
        ]
    ),

    //HOUSING  RESOURCE DEVELOPMENT PTE
    new Work("HOUSING RESOURCE DEVELOPMENT PTE",
        "JUL2003",
        "JAN2004",
        [
            new Project("NAIS FLAG SYSTEM",
                "Develop a module that interfaces with a Web Service in Japan using Messaging Queue for transporting data or placing orders.",
                [
                    new Role("PROGRAMMER",
                        [
                            "Developing modules according to document specification."
                        ])
                ],
                "C#, SQL Server, Oracle 8i, Visual SourceSafe, Windows 2000."
            ),
            new Project("WAREHOUSE MANAGEMENT SYSTEM",
                "A Small project that keeps track of warehouse processes and shipments of orders. ",
                [
                    new Role("PROGRAMMER",
                        [
                            "Developing modules according to document specification."
                        ])
                ],
                "C#, SQL Server, Visual SourceSafe, Windows 2000."
            )
        ]
    ),

    //ONLINE SOLUTIONS TECHNOLOGIES
    new Work("ONLINE SOLUTION TECHNOLOGIES",
        "JAN2003",
        "MAR2003",
        [
            new Project("ST. THERESA'S ACCOUNTING SYSTEM",
                "Automated system that assist faculties in enrolment and other processes to speed up transactions. Modified the system and reports according to client's request.",
                [
                    new Role("PROGRAMMER",
                        [
                            "Maintenance of legacy system",
                            "Supervising small projects and training junior programmers."
                        ])
                ],
                "Visual Basic 6, SQL Server 2000, Windows XP."
            )
        ]
    )
];