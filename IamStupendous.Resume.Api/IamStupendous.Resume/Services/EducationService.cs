using System.Collections.Generic;
using IamStupendous.Resume.Models;
using IamStupendous.Resume.Repositories;

namespace IamStupendous.Resume.Services
{
    public class EducationService : IEducationService
    {
        private readonly IEducationRepository _educationRepository;

        public EducationService(IEducationRepository educationRepository)
        {
            _educationRepository = educationRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IList<Education> GetEducations()
        {
            return _educationRepository.GetEducations();
        }
    }
}