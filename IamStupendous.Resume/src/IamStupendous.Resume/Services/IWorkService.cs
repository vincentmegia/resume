using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Services
{
    interface IWorkService
    {
        IList<Work> GetWorks();
    }
}