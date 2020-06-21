using Microsoft.AspNetCore.Mvc;

namespace IamStupendous.Resume.Controllers
{
    [ApiController]
    public class HomeController : Controller
    {
        [HttpGet("status")]
        public string Index()
        {
            return "home-ok";
        }
    }
}
