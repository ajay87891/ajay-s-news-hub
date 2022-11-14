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
  
  
  async componentDidMount() {
    

    

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
    console.log("l")
    
  
  }
 
  fetchMoreData = async()=>{
    this.setState({
      page: this.state.page +1
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

      </>
    );
  }
}
export default News;
