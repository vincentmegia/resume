using System.Collections.Generic;
using IamStupendous.Resume.Repository;
using IamStupendous.Resume.Services;
using IamStupendous.Resume.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace IamStupendous.Resume.Controllers
{
    [Produces("application/json")]
    [Route("api/Work")]
    public class ResumeController : Controller
    {
        private readonly IWorkRepository _workRepository;
        private readonly IEducationService _educationService;
        private readonly ISkillService _skillService;
        private readonly ISummaryService _summaryService;
        private readonly ITitleService _titleService;


        public ResumeController(IWorkRepository workRepository,
            IEducationService educationService,
            ISkillService skillService,
            ISummaryService summaryService,
            ITitleService titleService)
        {
            _workRepository = workRepository;
            _educationService = educationService;
            _skillService = skillService;
            _summaryService = summaryService;
            _titleService = titleService;
        }


        /// <summary>
        /// GET: api/Work
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IList<string> GetResume()
        {
            var works = _workRepository.GetWorks();
            return new string[] { "value1", "value2" };
        }
    }
}