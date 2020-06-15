using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repositories
{
    public interface ITitleRepository
    {
        public List<Title> GetTitles();
    }
}