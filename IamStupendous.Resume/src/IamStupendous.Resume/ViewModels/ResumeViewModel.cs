using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.ViewModels
{
    public class ResumeViewModel : IResumeViewModel
    {
        public IList<Title> Titles { get; set; }
        public IList<Work> Works { get; set; }
        public IList<Education> Educations { get; set; }
        public IList<MenuItem> MenuItems { get; set; }
        public IList<Skill> Skills { get; set; }
        public IList<Summary> Summaries { get; set; }

        public ResumeViewModel(IList<Title> titles,
            IList<Work> works,
            IList<Education> educations,
            IList<MenuItem> menuItems,
            IList<Skill> skills,
            IList<Summary> summaries)
        {
            Titles = titles;
            Works = works;
            Educations = educations;
            MenuItems = menuItems;
            Skills = skills;
            Summaries = summaries;
            MenuItems = CreateMenuItems();
        }

        /// <summary>
        /// 
        /// </summary>
        private IList<MenuItem> CreateMenuItems()
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
    }
}