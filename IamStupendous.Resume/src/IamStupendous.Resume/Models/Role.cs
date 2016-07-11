using System.Collections.Generic;

namespace IamStupendous.Resume.Models
{
    public class Role
    {
        public string Title { get; set; }
        public IList<string> Responsibilities { get; set; }
    }
}
