using System.Collections.Generic;
using IamStupendous.Resume.Models;
using IamStupendous.Resume.Repositories;

namespace IamStupendous.Resume.Services
{
    public class SkillService : ISkillService
    {
        private readonly ISkillRepository _skillRepository;

        public SkillService(ISkillRepository skillRepository)
        {
            _skillRepository = skillRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IList<Skill> GetSkills()
        {
            return _skillRepository.GetSkills();
        }
    }
}