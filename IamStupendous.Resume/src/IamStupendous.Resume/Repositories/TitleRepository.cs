using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repositories
{
    public class TitleRepository : ITitleRepository
    {
        /// <summary>
        /// Retrieves all job titles
        /// </summary>
        /// <returns></returns>
        public List<Title> GetTitles()
        {
            return new List<Title>
            {
                new Title("Vincent Megia", "Senior Software Engineer", "vincent.megia@gmail.com")
            };
        }
    }
}
