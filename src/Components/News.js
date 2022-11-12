import { Spinner } from "flowbite-react";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import noImage from "../icons/ImageNotFound.png"

export class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} News`
  }
   capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  async UpdateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    
    

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.UpdateNews();
    
    
  }
  // handelnextclick = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.props.pagesize)
  //   ) {
  //   } else {
  //     this.setState({
  //       page: this.state.page + 1,
  //     });
  //     this.UpdateNews();
  //   }
  // };
  // handelprevclick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.UpdateNews();
  // };
  fetchMoreData = async()=>{
    this.setState({
      page: this.state.page + 1
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log("upsated")


    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
     
      loading: false,
    });

  }
  

  render() {
    return (
      <>
        <div className="flex items-center flex-col">
          <h1 className="text-slate-800 text-2xl mb-4 font-serif dark:text-slate-300">
            Today's Headlines From {this.capitalizeFirstLetter(this.props.category)}
          </h1>
          {this.state.loading && <Spinner />}
        </div>

        


        <InfiniteScroll 
          
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          height={"90vh"}
          
        >
          
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-5  auto-cols-max mx-auto ">
            
          {
            this.state.articles.map((element) => {
              return (
                 
                <NewsItem
                  key={Math.random(1,10000)}
                  title={element.title?element.title.slice(0,45):""}
                  description={element.description?element.description.slice(0,60)+"...":""}
                  imgurl={element.urlToImage?element.urlToImage:noImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              );
            })}
            </div>
            
            
            
            
            
            </InfiniteScroll>
{/*         
        <hr className="my-7 text-slate-800 dark:text-slate-500 shadow-md rounded mx-4"></hr>
        <div className="flex justify-between mx-20 sm:mx-32 md:mx-80 my-8">
          <button
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:invisible "
            onClick={this.handelprevclick}
            disabled={this.state.page <= 1}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
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
        </div> */}
      </>
    );
  }
}
export default News;
