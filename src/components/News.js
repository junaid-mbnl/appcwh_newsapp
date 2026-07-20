import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "England vs India LIVE: Third ODI, Lord's - cricket score, commentary & video highlights",
      description:
        "England play India in the third one-day international at Lord's - follow live scores, radio commentary and video highlights.",
      url: "http://www.bbc.co.uk/sport/cricket/live/c4g465wyej5t",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/bbb9/live/99535ad0-835d-11f1-8d99-f1f0cec0b1ae.jpg",
      publishedAt: "2026-07-19T11:07:27.4986714Z",
      content:
        "Deep DasguptaFormer India wicketkeeper on BBC Radio 5 Sports Extra\r\nIt's been quite interesting so far. I'm surprised that India have come in with four seamers, quite inexperienced ones.\r\nI saw the p… [+242 chars]",
    },
    {
      source: {
        id: "techradar",
        name: "TechRadar",
      },
      author: "Roderick Easdale",
      title:
        "How to watch England vs India 2026 ODI series: cricket live streams, schedule, preview",
      description: "The match at Lord's is the series decider",
      url: "https://www.techradar.com/how-to-watch/cricket/england-vs-india-2026-odi-series",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/xkj7G3puAgdsqBWQZZmjRM-2560-80.jpg",
      publishedAt: "2026-07-14T08:00:00Z",
      content:
        "The England v India 3rd ODI 2026 at Lord’s is the series decider. For England, it offers a rare chance to beat India in a bilateral ODI series – England have won only seven of 21 previous series; and… [+6132 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor(){
    super(); //consider it as a formality.
    console.log('Constructor of News');
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="ODI" description="We won" imageURL="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/bbb9/live/99535ad0-835d-11f1-8d99-f1f0cec0b1ae.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="ODI" description="We won" imageURL="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/bbb9/live/99535ad0-835d-11f1-8d99-f1f0cec0b1ae.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="ODI" description="We won" imageURL="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/bbb9/live/99535ad0-835d-11f1-8d99-f1f0cec0b1ae.jpg"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="ODI" description="We won" imageURL="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/bbb9/live/99535ad0-835d-11f1-8d99-f1f0cec0b1ae.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="ODI" description="We won" imageURL="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/bbb9/live/99535ad0-835d-11f1-8d99-f1f0cec0b1ae.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="ODI" description="We won" imageURL="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/bbb9/live/99535ad0-835d-11f1-8d99-f1f0cec0b1ae.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

//col-md-4, bootstrap assumes total width to be 12 columns (at least in medium devices), so 4 width means 3 coulmns will suffice the space.
