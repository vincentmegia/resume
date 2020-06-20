using System.Collections.Generic;
using IamStupendous.Resume.Models;

namespace IamStupendous.Resume.Repositories
{
    public class SummaryRepository :  ISummaryRepository
    {
        /// <summary>
        /// Retrieves all Summary
        /// </summary>
        /// <returns></returns>
        public IList<Summary> GetSummaries()
        {
            return new List<Summary>
            {
                new Summary(
                    "17+ years experience in total information technology experience. "),
                new Summary(
                    "10+ years experience in Fullstack software development using Java and Spring for server side, HTML, Bootstrap, Angular thru Typescript for UI, webpack and npm for deployment and dependency management. Writes web unit test cases using Selenium if time permits. Spends a lot of time producing clean code and good in designing prototype layouts."),
                new Summary(
                    "5+ years experience in enterprise development using WPF for front end and WCF as rest service. Great understanding of enterprise bus messaging and good in writing re-usable clean code."),
                new Summary(
                    "1+ year experience writing micro services using Python and Flask and repository management using GIT and Docker."),
                new Summary("12+ years experience working for multinational banks, implementing a range of technologies from enterprise/service-oriented architecture, to supporting legacy proprietary trading systems. Strong domain knowledge in Equities, and has a good understanding of investment management platforms such as Charles River."),
                new Summary("Worked for Barclays from 2009 in Wealth Management department on a number of streams in project focused around buy side product Charles River IMST. Three of the big streams would be  Charles River Enhanced Workflow, Avaloq Vestima Funds Onboarding by STP and Charles River Anywhere Re-Write.")
            };
        }
    }
}