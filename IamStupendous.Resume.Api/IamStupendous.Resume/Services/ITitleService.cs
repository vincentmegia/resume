using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Services
{
    public interface ITitleService
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        IList<Title> GetTitle();
    }
}