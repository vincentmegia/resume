namespace IamStupendous.Resume.Models
{
    public class Skill
    {
        public string Name { get; set; }
        public int Expertise { get; set; }

        public Skill(string name, int expertise)
        {
            Name = name;
            Expertise = expertise;
        }
    }
}