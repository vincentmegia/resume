using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repositories
{
    public interface ISkillRepository
    {
        /// <summary>
        /// Retrj
        /// </summary>
        /// <returns></returns>
        IList<Skill> GetSkills();
    }
}