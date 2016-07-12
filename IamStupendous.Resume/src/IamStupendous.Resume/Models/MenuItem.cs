namespace IamStupendous.Resume.Models
{
    public class MenuItem
    {
        public string State { get; set; }
        public string Id { get; set; }
        public string Text { get; set; }
        public string Icon { get; set; }

        public MenuItem(string state, string id, string text, string icon)
        {
            State = state;
            Id = id;
            Text = text;
            Icon = icon;
        }
    }
}
