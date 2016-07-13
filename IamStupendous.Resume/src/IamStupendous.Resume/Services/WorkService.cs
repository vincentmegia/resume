using System.Collections.Generic;
using IamStupendous.Resume.Models;
using IamStupendous.Resume.Repositories;

namespace IamStupendous.Resume.Services
{
    public class WorkService : IWorkService
    {
        private readonly IWorkRepository _workRepository;

        public WorkService(IWorkRepository workRepository)
        {
            _workRepository = workRepository;
        }

        /// <summary>
        /// Retrieves work history
        /// </summary>
        /// <returns></returns>
        public IList<Work> GetWorks()
        {
            return _workRepository.GetWorks();
        }
    }
}