using System;
using System.Collections.Generic;

namespace IamStupendous.Resume.Models
{
    public class Work
    {
        public string Company { get; set; }
        public IList<Project> Projects { get; set; }
        public DateTime YearStart { get; set; }
        public DateTime? YearEnd { get; set; }

        public Work(string company,
            DateTime yearStart,
            DateTime? yearEnd,
            IList<Project> projects)
        {
            Company = company;
            Projects = projects;
            YearStart = yearStart;
            YearEnd = yearEnd;
        }
    }
}