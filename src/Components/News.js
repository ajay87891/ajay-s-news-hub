import { Spinner } from "flowbite-react";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import noImage from "../icons/ImageNotFound.png";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux'
import { add, addmore } from '../redux/reducers/newsreducer'

const News = (props) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.value.articles)
  const articles1 = useSelector((state) => state.news.value.a)
  console.log(articles);

  // const [articles1, setArticles] = useState(true);
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
    if(articles1){
      
    }


     // eslint-disable-next-line
  }, [articles1]);


  const updateNews = async () => {
    
    props.setProgress(10);

    const url = `https://agreeable-raincoat-worm.cyclic.app/api/getnews?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    dispatch(add(parsedData.articles))
    // setArticles(parsedData.articles);
    setTotalResult(parsedData.totalResults);
    console.log(articles);
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

    setLoading(false);
    dispatch(addmore(parsedData.articles))
    // setArticles(articles.concat(parsedData.articles));
  };

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text-slate-800 text-2xl  font-serif dark:text-slate-300 mt-28  md:mt-28 lg:mt-24 mb-4">
          {t("greet.1")}  {capitalizeFirstLetter(props.category)}
        </h1>
        {loading && <Spinner />}
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        
          endMessage={
           <p className="text-slate-800 "> End</p>
          }
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
export default News;
