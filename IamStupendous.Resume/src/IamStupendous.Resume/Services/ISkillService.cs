using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Services
{
    public interface ISkillService
    {
        IList<Skill> GetSkills();
    }
}