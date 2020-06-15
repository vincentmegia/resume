using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Services
{
    public interface IEducationService
    {
        IList<Education> GetEducations();
    }
}