using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.ViewModels
{
    public interface IResumeViewModel
    {
        IList<Title> Title { get; set; }
        IList<Work> Works { get; set; }
        IList<Education> Educatons { get; set; }
        IList<MenuItem> MenuItems { get; set; }
        IList<Skill> Skills { get; set; }
        IList<Summary> Summaries { get; set; }
    }
}