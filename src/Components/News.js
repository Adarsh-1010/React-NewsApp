import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {

  articles=[
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      },
      {
        "source": {
          "id": "financial-post",
          "name": "Financial Post"
        },
        "author": "The Canadian Press",
        "title": "Algonquin Power signs deal to sell renewable energy business for up to $2.5 billion",
        "description": "Algonquin Power & Utilities Corp. says it has signed a deal to sell its renewable energy business to a subsidiary of LS Power. Read more",
        "url": "https://financialpost.com/commodities/energy/algonquin-power-to-sell-renewable-energy-business",
        "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/08/algonquin-power-0809-ph.jpg",
        "publishedAt": "2024-08-09T14:33:41Z",
        "content": "OAKVILLE, Ont. Algonquin Power &amp; Utilities Corp. says it has signed a deal to sell its renewable energy business to a subsidiary of LS Power for up to US$2.5 billion.\r\nUnder the deal, which does … [+1004 chars]"
      },
      {
        "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
        },
        "author": "Jon Kamp, Rachel Wolfe, Ruth Simon, Justin Baer",
        "title": "Has the U.S. Economy Reached a Tipping Point?",
        "description": "As America teeters between a soft landing and recession, uncertainty is weighing on anxious consumers and businesses",
        "url": "https://www.wsj.com/economy/consumers/has-the-u-s-economy-reached-a-tipping-point-d2eb9d33?mod=hp_lead_pos7&amp;mod=hp_lead_pos7",
        "urlToImage": "https://images.wsj.net/im-989772/social",
        "publishedAt": "2024-08-09T09:30:00Z",
        "content": "Six months ago, Alex and Aaron Taylor booked a six-day trip from Minnesota to Walt Disney World for their family of five over the Thanksgiving holiday. In late June, Aaron lost his truck-driving job,… [+335 chars]"
      }

    ]

  constructor(){
    super();
    console.log("Hello I am constructor from news component");
    this.state={
      articles:this.articles,
      loading:false

    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey -Top Headlines</h2>

        <div className='row'>
        {this.state.articles.map((element)=>{
         return <div className='col-md-4'>
          <NewsItem key={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}
