using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.ViewModels
{
    public class ResumeViewModel : IResumeViewModel
    {
        public IList<Title> Title { get; set; }
        public IList<Work> Works { get; set; }
        public IList<Education> Educatons { get; set; }
        public IList<MenuItem> MenuItems { get; set; }
        public IList<Skill> Skills { get; set; }
        public IList<Summary> Summaries { get; set; }

        public ResumeViewModel(IList<Title> title,
            IList<Work> works,
            IList<Education> educatons,
            IList<MenuItem> menuItems,
            IList<Skill> skills,
            IList<Summary> summaries)
        {
            Title = title;
            Works = works;
            Educatons = educatons;
            MenuItems = menuItems;
            Skills = skills;
            Summaries = summaries;
        }
    }
}