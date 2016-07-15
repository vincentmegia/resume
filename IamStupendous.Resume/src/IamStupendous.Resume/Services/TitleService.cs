using System;
using System.Collections.Generic;
using IamStupendous.Resume.Models;
using IamStupendous.Resume.Repositories;

namespace IamStupendous.Resume.Services
{
    public class TitleService : ITitleService
    {
        private readonly ITitleRepository _titleRepository;

        public TitleService(ITitleRepository titleRepository)
        {
            _titleRepository = titleRepository;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IList<Title> GetTitle()
        {
            return _titleRepository.GetTitles();
        }
    }
}