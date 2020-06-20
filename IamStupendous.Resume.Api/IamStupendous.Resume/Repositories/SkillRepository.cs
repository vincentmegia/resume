using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repositories
{
    public class SkillRepository : ISkillRepository
    {
        /// <summary>
        /// Retrieves all skills
        /// </summary>
        /// <returns></returns>
        public IList<Skill> GetSkills()
        {
            return new List<Skill>
            {
                new Skill("Java J2EE", 90),
                new Skill("C#", 90),
                new Skill("Python", 60),
                new Skill("Javascript", 60),
                //web development
                new Skill("Asp.Net Core", 70),
                new Skill("Spring Boot", 70),
                new Skill("JQuery", 70),
                new Skill("Angular", 90),
                new Skill("Bootstrap", 80),
                new Skill("Nodejs", 60),
                new Skill("Deno", 50),
                new Skill("Webpack", 60),
                new Skill("WebSockets", 70),
                //Continous Integration/Development
                new Skill("GIT", 70),
                new Skill("Perfoce", 70),
                new Skill("ClearCase", 70),
                new Skill("Teamcity", 90),
                new Skill("Swagger", 50),
                new Skill("Docker", 70),
                new Skill("Maven", 80),
                new Skill("Ant", 90),
                // Batch scheduling
                new Skill("Autosys", 90),
                new Skill("Control-M", 90),
                //reporting , SQL Server Reporting Services
                new Skill("Crystal Reports", 90),
                new Skill("MS SQL Server Reporting Services", 90),
                //Database Technologies: SQL Server, Sybase, IBM DB2, Oracle, CouchDb
                new Skill("MS SQL Server", 90),
                new Skill("Oracle", 70),
                new Skill("CouchDb", 80),
                //.NET Frameworks: NUnit, AutoMapper, Nuget, Spring.NET, .Net Core, AKKA.Net, NHibernate
                new Skill("NUnit", 90),
                new Skill("AutoMapper", 90),
                new Skill("Nuget", 90),
                new Skill("Spring .NET", 70),
                new Skill(".Net Core", 90),
                new Skill("AKKA .Net", 70),
                new Skill("NHibernate", 70),
                //JAVA Frameworks: JUnit, Spring, Spring Boot, AKKA, Hibernate, Apache Came
                new Skill("JUnit", 90),
                new Skill("Spring", 90),
                new Skill("AKKA", 70),
                new Skill("Hibernate", 60),
                new Skill("Apache Camel", 80),
                //Python Frameworks: Django, Flask
                new Skill("Flask", 70),
                new Skill("Django", 70),
                //Messaging: RabbitMQ, IBM Websphere MQ
                new Skill("RabbitMQ", 70),
                new Skill("IBM Websphere MQ", 70),
            };
        }
    }
}