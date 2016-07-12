using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.ViewModels
{
    public class ResumeViewModel
    {
        private readonly Title _title;
        private readonly List<Work> _works;
        private readonly List<Education> _educatons;
        private readonly List<MenuItem> _menuItems;
        private readonly List<Skill> _skills;
        private readonly List<Summary> _summaries;

        public ResumeViewModel(Title title,
            List<Work> works,
            List<Education> educatons,
            List<MenuItem> menuItems,
            List<Skill> skills,
            List<Summary> summaries)
        {
            _title = title;
            _works = works;
            _educatons = educatons;
            _menuItems = menuItems;
            _skills = skills;
            _summaries = summaries;
        }
    }
}