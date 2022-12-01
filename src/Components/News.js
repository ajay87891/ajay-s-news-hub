import { Spinner } from "flowbite-react";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
<<<<<<< HEAD
import noImage from "../icons/ImageNotFound.png";
import { useTranslation } from "react-i18next";
=======
import noImage from "../icons/ImageNotFound.png"
>>>>>>> c41b3ce6a3a3d349dba0638ed2b24bb5a92bb4e9

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const {t} = useTranslation();

  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} News`
    updateNews(t("country"));
     // eslint-disable-next-line
  }, []);

  const updateNews = async () => {
    
    props.setProgress(10);
    const url = `https://agreeable-raincoat-worm.cyclic.app/api/getnews?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResult(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    
    const url = `https://agreeable-raincoat-worm.cyclic.app/api/getnews?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pagesize}`;
    setpage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log("upsated")

<<<<<<< HEAD
    setLoading(false);
    setArticles(articles.concat(parsedData.articles));
  };
=======
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
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
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f03cebe013543198abee230ab815999&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("upsated")


    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
     
      loading: false,
    });

  }
  
>>>>>>> c41b3ce6a3a3d349dba0638ed2b24bb5a92bb4e9

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text-slate-800 text-2xl  font-serif dark:text-slate-300 mt-20  md:mt-28 lg:mt-24 mb-4">
          {t("greet.1")}  {capitalizeFirstLetter(props.category)}
        </h1>
        {loading && <Spinner />}
      </div>

<<<<<<< HEAD
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-5  auto-cols-max mx-auto ">
          {articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title?element.title.slice(0, 45) : ""}
                description={
                  element.description
                    ? element.description.slice(0, 60) + "..."
                    : ""
                }
                imgurl={element.urlToImage ? element.urlToImage : noImage}
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
};
=======
        


        <InfiniteScroll 
          
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          height={"90vh"}
          
        >
          
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  auto-cols-max ">
            
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
>>>>>>> c41b3ce6a3a3d349dba0638ed2b24bb5a92bb4e9
export default News;
