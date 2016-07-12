using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repository
{
    public interface IWorkRepository
    {
        IList<Work> GetWorks();
    }
}