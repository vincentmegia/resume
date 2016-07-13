using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.ViewModels
{
    public class ResumeViewModel
    {
        public Title Title { get; private set; }
        public List<Work> Works { get; private set; }
        public List<Education> Educatons { get; private set; }
        public List<MenuItem> MenuItems { get; private set; }
        public List<Skill> Skills { get; private set; }
        public List<Summary> Summaries { get; private set; }

        public ResumeViewModel(Title title,
            List<Work> works,
            List<Education> educatons,
            List<MenuItem> menuItems,
            List<Skill> skills,
            List<Summary> summaries)
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