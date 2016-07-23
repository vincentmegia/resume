using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repositories
{
    public interface ISummaryRepository
    {
        IList<Summary> GetSummaries();
    }
}