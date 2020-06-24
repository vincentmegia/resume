using System.Collections.Generic;
using IamStupendous.Resume.Models;
using IamStupendous.Resume.Services;
using Microsoft.AspNetCore.Mvc;

namespace IamStupendous.Resume.Controllers
{
    [ApiController]
    [Route("resume")]
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

        [HttpGet("/")]
        public string Index()
        {
            return "ok";
        }
        /// <summary>
        /// GET: api/resume/works
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("works")]
        public IList<Work> GetWorks()
        {
            return _workService
                .GetWorks();
        }

        /// <summary>
        /// GET: api/resume/educations
        /// </summary>
        /// <returns></returns>
        [HttpGet("educations")]
        public IList<Education> GetEducations()
        {
            return _educationService
                .GetEducations();
        }

        /// <summary>
        /// GET: api/resume/skill
        /// </summary>
        /// <returns></returns>
        [HttpGet("skills")]
        public IList<Skill> GetSkills()
        {
            return _skillService
                .GetSkills();
        }

        /// <summary>
        /// GET: api/resume/summaries
        /// </summary>
        /// <returns></returns>
        [HttpGet("summaries")]
        public IList<Summary> GetSummaries()
        {
            return _summaryService
                .GetSummaries();
        }

        /// <summary>
        /// GET: api/resume/titles
        /// </summary>
        /// <returns></returns>
        [HttpGet("titles")]
        public IList<Title> GetTitles()
        {
            return _titleService
                .GetTitle();
        }

        /// <summary>
        /// GET: api/resume/menu-items
        /// </summary>
        /// <returns></returns>
        [HttpGet("menu-items")]
        public IList<MenuItem> GetMenuItems()
        {
            return new List<MenuItem>
            {
                new MenuItem("Summary Experience", "#summary-experience", "fa fa-user"),
                new MenuItem("Education", "#education", "fa fa-book"),
                new MenuItem("Work", "#work", "fa fa-briefcase"),
                new MenuItem("Skills", "#skills", "fa fa-code"),
                new MenuItem("Contact", "#contact", "fa fa-envelope")
            };
        }

        /// <summary>
        /// GET: api/resume
        /// </summary>
        /// <returns></returns>
        //[HttpGet]
        // public IResumeViewModel Get()
        // {
        //     var works = _workService
        //         .GetWorks()
        //         .ToList();
        //     var educations = _educationService
        //         .GetEducations()
        //         .ToList();
        //     var skills = _skillService
        //         .GetSkills()
        //         .ToList();
        //     var summaries = _summaryService
        //         .GetSummaries()
        //         .ToList();
        //     var titles = _titleService
        //         .GetTitle();
        //     var viewModel = new ResumeViewModel(titles, works, educations, null, skills, summaries);
        //     return viewModel;
        // }
    }
}
