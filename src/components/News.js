import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

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
  constructor() {
    super(); //consider it as a htmlFormality.
    console.log("Constructor of News");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2026-06-21&sortBy=publishedAt&category=${this.props.category}&apiKey=23921384f33f4db294547c7ca80741d0&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    }); //yes it is saved by name totalResults in the response; yes we added a new attribute which we didn't wrote while defining above.
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2026-06-21&sortBy=publishedAt&category=${this.props.category}&apiKey=23921384f33f4db294547c7ca80741d0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalArticles / this.props.pageSize)
    ) {
      //Disable the button - go and check the button disabling code
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2026-06-21&sortBy=publishedAt&category=${this.props.category}&apiKey=23921384f33f4db294547c7ca80741d0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });

      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              //This key below (unique) argument is a necessity while mapping and iterating, we have url as the unique factor. And it is about the div that is being returned, not the internal divs.
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""} //Slicing is being done to give the card a unihtmlForm size. Question mark check is ternary operator, it checks if what we are slicing is not NULL. ! means not.
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageURL={element.urlToImage}
                  newsURL={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <hr></hr>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-outline-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            className="btn btn-outline-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

//col-md-4, bootstrap assumes total width to be 12 columns (at least in medium devices), so 4 width means 3 coulmns will suffice the space.
