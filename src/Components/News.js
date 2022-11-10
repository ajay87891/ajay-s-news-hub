import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0f03cebe013543198abee230ab815999&page=1&pageSize=${this.props.pagesize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }
   handelnextclick = async ()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

    }else{

    
    console.log("next")
    this.setState({
      page: this.state.page+1
    })
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0f03cebe013543198abee230ab815999&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
    });
  }
  }
  handelprevclick = async ()=>{
    console.log("prev")
    this.setState({
      page: this.state.page-1
    })
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0f03cebe013543198abee230ab815999&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
    });


  }


  render() {
    return (
      <>
        <div className="flex justify-center">
          <h1 className="text-slate-800 text-6xl mb-4 font-serif dark:text-slate-300">
            Today's Headlines
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 auto-cols-max ">
          {this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title}
                description={element.description}
                imgurl={element.urlToImage}
                newsurl={element.url}
              />
            );
          })}
        </div>
        <hr className="my-7 text-slate-800 dark:text-slate-500 shadow-md rounded mx-4"></hr>
        <div className="flex justify-between mx-20 sm:mx-32 md:mx-80 my-8">
        <button
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:invisible "
              onClick={this.handelprevclick}
              disabled={this.state.page<=1}
            >
              
              <svg
                aria-hidden="true"
                className="mr-2 -ml-1 w-4 h-4 rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Previous
            </button>
          
           <button
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:invisible"
              onClick={this.handelnextclick}
              disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)}
            >
              Next
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
        </div>
      </>
    );
  }
}
export default News;
