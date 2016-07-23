using System.Collections.Generic;

namespace IamStupendous.Resume.Models
{
    public class Role
    {
        public string Title { get; set; }
        public IList<string> Responsibilities { get; set; }

        public Role(string title, IList<string> responsibilities)
        {
            Title = title;
            Responsibilities = responsibilities;
        }
    }
}
