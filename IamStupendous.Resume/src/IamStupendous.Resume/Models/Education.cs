using System;

namespace IamStupendous.Resume.Models
{
    public class Education
    {
        public string School { get; set; }
        public string Degree { get; set; }
        public DateTime YearStart { get; set; } 
        public DateTime YearEnd { get; set; }

        public Education(string school, string degree, DateTime yearStart, DateTime yearEnd)
        {
            School = school;
            Degree = degree;
            YearStart = yearStart;
            YearEnd = yearEnd;
        }
    }
}
