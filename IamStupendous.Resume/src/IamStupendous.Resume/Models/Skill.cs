namespace IamStupendous.Resume.Models
{
    public class Skill
    {
        public string Name { get; set; }
        public int Experetise { get; set; }

        public Skill(string name, int experetise)
        {
            Name = name;
            Experetise = experetise;
        }
    }
}