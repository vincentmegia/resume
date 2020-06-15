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

        public Chart(IList<string> labels, IList<int> data, string type, string options, IList<string> colors)
        {
            Labels = labels;
            Data = data;
            Type = type;
            Options = options;
            Colors = colors;
        }
    }
}
