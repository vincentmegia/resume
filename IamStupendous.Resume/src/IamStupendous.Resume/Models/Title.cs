namespace IamStupendous.Resume.Models
{
    public class Title
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Email { get; set; }
        public string State { get; set; }

        public Title(string name, string description, string email, string state)
        {
            Name = name;
            Description = description;
            Email = email;
            State = state;
        }
    }
}
