using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.ViewModels
{
    public interface IResumeViewModel
    {
        IList<Title> Titles { get; set; }
        IList<Work> Works { get; set; }
        IList<Education> Educations { get; set; }
        IList<MenuItem> MenuItems { get; set; }
        IList<Skill> Skills { get; set; }
        IList<Summary> Summaries { get; set; }
    }
}