import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
          "source": { "id": null, "name": "CoinDesk" },
          "author": "Sam Reynolds",
          "title": "FTX Token Plummets as Market Fears Possible Alameda Contagion - CoinDesk",
          "description": "FTT has declined nearly 20% over the course of an hour, with Solana's SOL down 17% and Serum's SRM off 10%.",
          "url": "https://www.coindesk.com/markets/2022/11/08/ftt-plummets-as-market-fears-possible-alameda-contagion/",
          "urlToImage": "https://www.coindesk.com/resizer/CQb6tliS2BnWD4Bx5JlLKl4-SDE=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IOFDG5WYSVCM3KH5LDSQJZJOFM.jpg",
          "publishedAt": "2022-11-08T13:33:00Z",
          "content": "Fears over another meltdown similar to the crypto fund Three Arrows Capital's troubles earlier this year but this time tied to billionaire Sam Bankman-Fried's FTX exchange and his trading firm, Alame… [+2061 chars]"
        },
        {
          "source": { "id": null, "name": "Page Six" },
          "author": "Francesca Bacardi",
          "title": "Aaron Carter's friend details scene of singer's death, final days - Page Six",
          "description": "“I went to the bathroom where the bathtub was full of water, like, yellowish color,” Carter’s longtime friend Gary Madatyan shared in a new interview.",
          "url": "https://pagesix.com/2022/11/08/aaron-carters-friend-shares-details-surrounding-singers-death/",
          "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/11/aaron-carter-gary-madatyan-37.jpg?quality=75&strip=all&w=1200",
          "publishedAt": "2022-11-08T13:33:00Z",
          "content": "Aaron Carter’s longtime friend opened up about what he saw at the late singer’s house the day his body was discovered.\r\nGary Madatyan and Carter’s on-again, off-again fiancée, Melanie Martin, walked … [+3133 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "NFL Week 10 Power Rankings: Aaron Rodgers' Packers are done as they fall into bottom 5; Dolphins, Ravens rise - CBS Sports",
          "description": "Pete Prisco says it's over for Green Bay, which is ranked 25 spots below where it started the season",
          "url": "https://www.cbssports.com/nfl/news/nfl-week-10-power-rankings-aaron-rodgers-packers-are-done-as-they-fall-into-bottom-5-dolphins-ravens-rise/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/11/08/decba8cb-cbdb-49e5-b777-7e9df670fa4d/thumbnail/1200x675/68ec1fb8a19272fab341d6181f2728db/packersrodgerspowerranks.png",
          "publishedAt": "2022-11-08T13:07:00Z",
          "content": "The team I picked to get to the Super Bowl from the NFC is finished. I know, I know. They can rally and sneak into the playoffs. But ask this question: What is there about this team that gives you th… [+9427 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Laura Ly",
          "title": "Cornell suspends fraternity parties and social events after allegations of sexual assault and drug-laced drinks - CNN",
          "description": "Cornell University has suspended all fraternity parties and social events after campus police issued alerts about an alleged sexual assault and at least four alleged incidents of drug-laced drinks at an off-campus location, university officials said.",
          "url": "https://www.cnn.com/2022/11/08/us/cornell-fraternity-parties-suspended/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221108111002-cornell-university-file-011422.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2022-11-08T12:56:00Z",
          "content": "Cornell University has suspended all fraternity parties and social events after campus police issued alerts about an alleged sexual assault and at least four alleged incidents of drug-laced drinks at… [+1385 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "US Midterm Polls LIVE | US Midterm Elections 2022 Live | Polls Open in Crucial US Midterm Elections - CNN-News18",
          "description": "US Midterm Polls LIVE | US Midterm Elections 2022 Live | Polls Open in Crucial US Midterm ElectionsDemocrats made significant headway in recent months arguin...",
          "url": "https://www.youtube.com/watch?v=mtsd9Njn12k",
          "urlToImage": "https://i.ytimg.com/vi/mtsd9Njn12k/hqdefault_live.jpg",
          "publishedAt": "2022-11-08T12:35:59Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "JAN M. OLSEN",
          "title": "Norway: Princess gives up royal duties amid fiancé questions - Yahoo News",
          "description": "Princess Märtha Louise, the daughter of Norway’s King Harald, said Tuesday she no longer will officially represent the Norwegian royal house following “many ...",
          "url": "https://news.yahoo.com/norway-princess-gives-royal-duties-121152020.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/BPy6a6NTTrxYQ69JeWjfpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MzA-/https://media.zenfs.com/en/ap.org/7adee57b4ab0b2839a09152cf38e2a88",
          "publishedAt": "2022-11-08T12:11:52Z",
          "content": "COPENHAGEN, Denmark (AP) Princess Märtha Louise, the daughter of Norways King Harald, said Tuesday she no longer will officially represent the Norwegian royal house following many questions relating … [+3032 chars]"
        },
        {
          "source": { "id": "engadget", "name": "Engadget" },
          "author": "https://www.engadget.com/about/editors/jon-fingas",
          "title": "Garmin's Instinct Crossover is a rugged hybrid smartwatch with a useful display - Engadget",
          "description": "Garmin has unveiled a rugged hybrid smartwatch that can last for over two months on a charge..",
          "url": "https://www.engadget.com/garmin-instinct-crossover-rugged-hybrid-smartwatch-120024799.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/19854830-5a1d-11ed-9b31-5e6a7e4a53ca",
          "publishedAt": "2022-11-08T12:02:00Z",
          "content": "Garmin already sells hybrid smartwatches like the Vivomove, but they're really not meant for hikes and other outdoor expeditions. The company is addressing that gap today with its just-launched Insti… [+1974 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "LIVE: Scenes from key states on Election Day as Americans vote in midterms - Reuters",
          "description": "Americans cast the final ballots in U.S. midterm elections that will determine whether Democrats lose control of Congress, and with it the ability to push fo...",
          "url": "https://www.youtube.com/watch?v=PvTmeIq0-7o",
          "urlToImage": "https://i.ytimg.com/vi/PvTmeIq0-7o/maxresdefault_live.jpg",
          "publishedAt": "2022-11-08T11:48:41Z",
          "content": null
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Ryan Gaydos",
          "title": "Colts' Jim Irsay 'glad' Jeff Saturday has no head-coaching experience in NFL or college - Fox News",
          "description": "Indianapolis Colts team owner Jim Irsay introduced Jeff Saturday as the team's interim head coach and defended the decision to hire the former center.",
          "url": "https://www.foxnews.com/sports/colts-jim-irsay-glad-jeff-saturday-no-head-coaching-experience-in-nfl-or-college",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/11/Jeff-Saturday2.jpg",
          "publishedAt": "2022-11-08T11:36:36Z",
          "content": "Indianapolis Colts team owner Jim Irsay had a bizarre press conference introducing interim head coach Jeff Saturday night on Monday hours after firing Frank Reich.\r\nSaturday takes the reins from Reic… [+2661 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Italy allows migrant boat to dock but many remain stranded - BBC",
          "description": "A total of 89 people were allowed to disembark but hundreds more are waiting to come ashore.",
          "url": "https://www.bbc.com/news/world-europe-63554335",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/46D7/production/_127553181_mediaitem127553177.jpg",
          "publishedAt": "2022-11-08T11:36:03Z",
          "content": "Migrants from one of four rescue boats that Italy had blocked from docking have been allowed to disembark after a week at sea, the charity that operates the vessel said.\r\nA total of 89 people on boar… [+3186 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Olga Voitovych, Mick Krever",
          "title": "Russian forces step up raids on civilians in occupied Kherson as potential battle for city looms - CNN",
          "description": "Russian forces have stepped up their scrutiny of civilians in occupied areas of Ukraine's southern Kherson region, detaining locals to root out partisan resistance, according to the Ukrainian military.",
          "url": "https://www.cnn.com/2022/11/07/europe/kherson-russia-ukraine-intl/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221107090306-kherson-110622.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2022-11-08T11:07:00Z",
          "content": "Russian forces have stepped up their scrutiny of civilians in occupied areas of Ukraines southern Kherson region, detaining locals to root out partisan resistance, according to the Ukrainian military… [+6887 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Aya Elamroussi",
          "title": "Subtropical Storm Nicole is on track to strengthen into a Category 1 hurricane as it approaches Florida - CNN",
          "description": "A powerful storm packing torrential rain and damaging winds could slam into Florida's east coast as a Category 1 hurricane this week as many residents are still enduring the aftermath of Hurricane Ian.",
          "url": "https://www.cnn.com/2022/11/08/weather/nicole-path-florida-tuesday/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221108024248-nicole-track-1a.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2022-11-08T10:19:00Z",
          "content": "A powerful storm packing torrential rain and damaging winds could slam into Floridas east coast as a Category 1 hurricane this week as many residents are still enduring the aftermath of Hurricane Ian… [+4152 chars]"
        },
        {
          "source": { "id": null, "name": "SciTechDaily" },
          "author": null,
          "title": "Pinwheel Firework: Stunning Telescope Image Captures Grand Design Spiral Galaxy - SciTechDaily",
          "description": "This stunning image clearly displays the well-defined arms of the spiral galaxy NGC 4254, also known as the Coma Pinwheel or Messier 99. Because of its distinctive pinwheel shape with prominent arms, it’s called a grand design spiral galaxy. It was discovered…",
          "url": "https://scitechdaily.com/pinwheel-firework-stunning-telescope-image-captures-grand-design-spiral-galaxy/",
          "urlToImage": "https://scitechdaily.com/images/Spiral-Galaxy-NGC-4254-Coma-Pinwheel-Messier-99.jpg",
          "publishedAt": "2022-11-08T09:33:59Z",
          "content": "This image of the spiral galaxy NGC 4254, also known as the Coma Pinwheel or Messier 99, is a composite of data taken with ESOs Very Large Telescope (VLT) and the Atacama Large Millimeter/submillimet… [+804 chars]"
        },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "YeEun Kim",
          "title": "The Best Dressed Celebrities at the 2022 CFDA Fashion Awards - Yahoo Entertainment",
          "description": "Celebrities brought out their best red carpet looks as they attended the 2022 CFDA Fashion Awards...",
          "url": "https://www.yahoo.com/entertainment/best-dressed-celebrities-2022-cfda-082256376.html",
          "urlToImage": "https://media.zenfs.com/en/hypebae_340/cc7a9956033cd76b58456e55d7d40402",
          "publishedAt": "2022-11-08T08:22:56Z",
          "content": "Celebrities brought out their best red carpet looks as they attended the 2022 CFDA Fashion Awards that took place in New York City tonight.\r\nWith the red carpet hosted by Selling Sunset star Christin… [+1029 chars]"
        },
        {
          "source": { "id": "engadget", "name": "Engadget" },
          "author": "https://www.engadget.com/about/editors/jon-fingas",
          "title": "MediaTek's latest Dimensity chip supports WiFi 7 and ray tracing - Engadget",
          "description": "MediaTek has unveiled its latest flagship phone chip, and it offers a number of firsts that include WiFi 7 support..",
          "url": "https://www.engadget.com/mediatek-dimensity-9200-phone-soc-080033338.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/ba0d8790-5c3e-11ed-beed-c9747dbfd27d",
          "publishedAt": "2022-11-08T08:01:34Z",
          "content": "MediaTek is still frequently associated with budget Android phones, but it's increasingly making its way into flagships and its latest system-on-chip might help on that front. The company has introdu… [+1859 chars]"
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Paul Steinhauser",
          "title": "DEMOCRACY 2022: Voters head to the polls with congressional balance of power on the line - Fox News",
          "description": "Roughly a third of the Senate, all 435-members of the House of Representatives, and governors’ offices in 36 of the 50 states are up for grabs in Tuesday's midterm elections.",
          "url": "https://www.foxnews.com/politics/democracy-2022-voters-head-polls-congressional-balance-power-on-line",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/10/Sequence-04.00_00_10_13.Still002.jpg",
          "publishedAt": "2022-11-08T07:00:51Z",
          "content": "President Biden predicts that Democrats will \"surprise the living devil out of a lot of people\" in Tuesdays midterm elections, when roughly a third of the Senate, all 435-members of the House of Repr… [+7913 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Foxconn: iPhone maker bets on electric truck firm Lordstown Motors - BBC",
          "description": "The Taiwanese technology giant says it will invest up to $170m in Ohio-based Lordstown Motors.",
          "url": "https://www.bbc.com/news/business-63551439",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D291/production/_127550935_lmc_endurance_1.jpg",
          "publishedAt": "2022-11-08T05:01:37Z",
          "content": "Foxconn, which makes iPhones for Apple, says it is deepening its investment in a US electric pick-up truck firm, which could challenge Tesla's Cybertruck.\r\nThe technology giant is spending up to $170… [+2569 chars]"
        },
        {
          "source": { "id": null, "name": "PEOPLE" },
          "author": "https://www.facebook.com/peoplemag",
          "title": "Chris Evans Is PEOPLE's 2022 Sexiest Man Alive: 'My Mom Will Be So Happy' - PEOPLE",
          "description": "Chris Evans says he's bracing for playful harassment from his friends, but knows his mom will love it. \"She’s proud of everything I do but this is something she can really brag about\"",
          "url": "https://people.com/movies/chris-evans-people-sexiest-man-alive-2022/",
          "urlToImage": "https://people.com/thmb/6UHHobpwFfwbJeAnghBKC6jJTnM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/chris-evans-split-tout-110722-3264419fe1df404dacaad5caa8f5b929.jpg",
          "publishedAt": "2022-11-08T04:56:00Z",
          "content": "If you were to tell a middle school-aged Chris Evans that he would one day be named PEOPLE's Sexiest Man Alive, \"he'd be pumped!\" the star tells the magazine in this week's cover story. \"This would p… [+3530 chars]"
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Carmen Reinicke",
          "title": "Stock futures flat as Wall Street awaits U.S. midterm elections - CNBC",
          "description": "The three major averages are fresh off a second day of gains as investors turn their focus toward the midterms.",
          "url": "https://www.cnbc.com/2022/11/07/stock-market-futures-open-to-close-news.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107147352-16678455582022-11-07t162700z_2093235315_rc22hx9x25lw_rtrmadp_0_usa-stocks.jpeg?v=1667862074&w=1920&h=1080",
          "publishedAt": "2022-11-08T04:36:00Z",
          "content": "Stock futures were flat Monday evening following a winning day for markets as investors looked ahead to U.S. midterm elections on Tuesday.\r\nFutures tied to the Dow Jones Industrial average rose 12 po… [+1670 chars]"
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Christina Wilkie",
          "title": "Trump suggests he'll launch his 2024 presidential campaign on Nov. 15 in Florida - CNBC",
          "description": "Former President Donald Trump suggests he'll launch his 2024 presidential campaign next Tuesday from his Florida resort, Mar-a-Lago.",
          "url": "https://www.cnbc.com/2022/11/08/trump-suggests-he-will-launch-his-2024-presidential-campaign-on-nov-15.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107147814-16679099682022-11-08t031441z_1602063046_rc2dhx954tp4_rtrmadp_0_usa-election-trump.jpeg?v=1667912359&w=1920&h=1080",
          "publishedAt": "2022-11-08T03:49:00Z",
          "content": "Follow CNBC's live blog covering Tuesday's midterm elections here.\r\nWASHINGTON After weeks of intensifying speculation, former President Donald Trump said Monday that he will make a \"big announcement… [+4287 chars]"
        }
      ]
    constructor(){
        super();
        console.log("heloo im fram neu componants")
        this.state = {
            articles: this.articles,
            loading: false
        }
        
        }
        
    
  render() {
    return (
        <>
        <div className='flex justify-center'>
        <h1 className='text-slate-800 text-4xl' >Headlines</h1></div>
        
      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 '>
      {this.state.articles.map((element)=>{
            return <NewsItem key={element.url} title={element.title} description = {element.description} imgurl = {element.urlToImage} newsurl={element.url}/>
        })}
        
        
        
      </div>
      </>
    )
  }

}
export default News
