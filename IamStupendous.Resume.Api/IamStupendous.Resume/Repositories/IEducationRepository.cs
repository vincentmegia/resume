using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repositories
{
    public interface IEducationRepository
    {
        IList<Education> GetEducations();
    }
}