namespace IamStupendous.Resume.Models
{
    public class Skill
    {
        public string Name { get; set; }
        public string Experetise { get; set; }
        public string Unknown { get; set; }

        public Skill(string name, string experetise, string unknown)
        {
            Name = name;
            Experetise = experetise;
            Unknown = unknown;
        }
    }
}
