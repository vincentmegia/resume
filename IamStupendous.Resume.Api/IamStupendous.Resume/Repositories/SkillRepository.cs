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
                new Skill("C#", 90),
                new Skill("Asp.Net MVC", 70),
                new Skill("WCF", 70),
                new Skill("SpringNET", 70),
                new Skill("Javascript", 70),
                new Skill("Bootstrap", 70),
                new Skill("AngularJS", 70),
                new Skill("Angular", 70),
                new Skill("Typescript", 70),
                new Skill("JQuery", 70),
                new Skill("WebSockets", 70),
                new Skill("SQL Server", 80),
            };
        }
    }
}