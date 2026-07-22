import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "business",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props); //consider it as a htmlFormality.
    console.log("Constructor of News");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
    };
    document.title = `${this.props.category} - NewsMonkey`;
  }
  async updateNews(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2026-06-22&sortBy=publishedAt&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    }); //yes it is saved by name totalResults in the response; yes we added a new attribute which we didn't wrote while defining above.
    this.props.setProgress(100)

  };
  async componentDidMount() {
    this.updateNews()
  };
  fetchMoreData = async () =>{
    const nextPage= this.state.page+1;
    this.setState({page: nextPage})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2026-06-22&sortBy=publishedAt&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }
  render() {
    return (
      <>
        <h2>NewsMonkey - Top Headlines on {this.props.category}</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!==this.state.totalResults} loader={<Spinner/>}>
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                //This key below (unique) argument is a necessity while mapping and iterating, we have url as the unique factor. And it is about the div that is being returned, not the internal divs.
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} //Slicing is being done to give the card a unihtmlForm size. Question mark check is ternary operator, it checks if what we are slicing is not NULL. ! means not.
                    description={element.description ? element.description.slice(0, 88) : ""} imageURL={element.urlToImage}
                    newsURL={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}/>
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        <hr></hr>
      </>
    );
  }
}

//col-md-4, bootstrap assumes total width to be 12 columns (at least in medium devices), so 4 width means 3 coulmns will suffice the space.
