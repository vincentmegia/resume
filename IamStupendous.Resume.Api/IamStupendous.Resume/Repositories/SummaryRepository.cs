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
                    "Over 13+ years of solid software development experience in building highly complex enterprise applications in areas such as multi layered web development using C# or Java, windows development by windows forms or WCF, back-end services based on SOA principles, report generation and data transformation layer (ETL) using Informatica and ULLink."),
                new Summary(
                    "Over 7+ years of experience working in multi-national financial investment banking giants such as Barclays and Credit Suisse where teams collaboratively work across regions to delivering high quality enterprise applications catered for demanding business in short amount time and high pressure environment."),
                new Summary(
                    "Good working experience with sophisticated investment platform such as Charles River and Charles River Anywhere."),
                new Summary(
                    "A highly motivated individual who is constantly learning, able to work to tight deadlines, and who can communicate effectively with technical peers as well as business users. Someone who promotes an environment of learning and the sharing of ideas and is always open looking for new challenges.")
            };
        }
    }
}