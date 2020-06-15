namespace IamStupendous.Resume.Models
{
    public class MenuItem
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public string Icon { get; set; }

        public MenuItem(string text, string id, string icon)
        {
            Id = id;
            Text = text;
            Icon = icon;
        }
    }
}
