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
        public ResumeViewModel Get()
        {
            var works = _workService.GetWorks().ToList();
            var viewModel = new ResumeViewModel(null, works, null, null, null, null);
            return viewModel;
        }
    }
}
