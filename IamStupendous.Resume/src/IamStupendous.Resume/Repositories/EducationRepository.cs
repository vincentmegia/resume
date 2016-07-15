using System;
using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repositories
{
    public class EducationRepository : IEducationRepository
    {
        /// <summary>
        /// Retrieves all educations
        /// </summary>
        /// <returns></returns>
        public IList<Education> GetEducations()
        {
            return new List<Education>
            {
                new Education("De La Salle University",
                    "Bachelor of Science in Computer Science",
                    new DateTime(1997, 1, 1),
                    new DateTime(2002, 1, 1)
                    )
            };
        }
    }
}