using System.Collections.Generic;

namespace IamStupendous.Resume.Models
{
    public class Chart
    {
        public IList<string> Labels { get; set; }
        public IList<int> Data { get; set; }
        public string Type { get; set; }
        public string Options { get; set; }
        public IList<string> Colors { get; set; }
    }
}
