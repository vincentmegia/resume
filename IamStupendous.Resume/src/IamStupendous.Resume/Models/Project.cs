using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace IamStupendous.Resume.Models
{
    public class Project
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public IList<Role> Roles { get; set; }
        public string Technologies { get; set; }
        public bool IsOpen { get; set; }

        public Project(string title, string description, IList<Role> roles, string technologies)
        {
            Title = title;
            Description = description;
            Roles = roles;
            Technologies = technologies;
        }
    }
}
