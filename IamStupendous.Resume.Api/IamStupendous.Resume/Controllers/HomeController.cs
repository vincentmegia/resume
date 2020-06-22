using Microsoft.AspNetCore.Mvc;

namespace IamStupendous.Resume.Controllers
{
    [ApiController]
    [Route("home")]
    public class HomeController : Controller
    {
        [HttpGet]
        public string Index()
        {
            return "home-ok";
        }
    }
}
