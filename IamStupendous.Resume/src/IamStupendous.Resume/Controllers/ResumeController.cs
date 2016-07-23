using System.Linq;
using IamStupendous.Resume.Services;
using IamStupendous.Resume.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace IamStupendous.Resume.Controllers
{
    [Produces("application/json")]
    [Route("api/resume")]
    public class ResumeController : Controller
    {
        private readonly IWorkService _workService;
        private readonly IEducationService _educationService;
        private readonly ISkillService _skillService;
        private readonly ISummaryService _summaryService;
        private readonly ITitleService _titleService;

        public ResumeController(IWorkService workService,
            IEducationService educationService,
            ISkillService skillService,
            ISummaryService summaryService,
            ITitleService titleService)
        {
            _workService = workService;
            _educationService = educationService;
            _skillService = skillService;
            _summaryService = summaryService;
            _titleService = titleService;
        }

        /// <summary>
        /// GET: api/home
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IResumeViewModel Get()
        {
            var works = _workService
                .GetWorks()
                .ToList();
            var educations = _educationService
                .GetEducations()
                .ToList();
            var skills = _skillService
                .GetSkills()
                .ToList();
            var summaries = _summaryService
                .GetSummaries()
                .ToList();
            var titles = _titleService
                .GetTitle();
            var viewModel = new ResumeViewModel(titles, works, educations, null, skills, summaries);
            return viewModel;
        }
    }
}
