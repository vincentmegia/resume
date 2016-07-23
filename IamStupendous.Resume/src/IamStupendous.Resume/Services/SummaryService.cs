using System.Collections.Generic;
using IamStupendous.Resume.Models;
using IamStupendous.Resume.Repositories;

namespace IamStupendous.Resume.Services
{
    public class SummaryService : ISummaryService
    {
        private readonly ISummaryRepository _summaryRepository;

        public SummaryService(ISummaryRepository summaryRepository)
        {
            _summaryRepository = summaryRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IList<Summary> GetSummaries()
        {
            return _summaryRepository.GetSummaries();
        }
    }
}