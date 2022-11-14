import { Spinner } from "flowbite-react";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import noImage from "../icons/ImageNotFound.png";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  // document.title = `${capitalizeFirstLetter(props.category)} News`

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
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
    setpage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log("upsated")

    setLoading(false);
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text-slate-800 text-2xl mb-4 font-serif dark:text-slate-300">
          Today's Headlines From {capitalizeFirstLetter(props.category)}
        </h1>
        {loading && <Spinner />}
      </div>

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
                key={Math.random(1, 10000)}
                title={element.title ? element.title.slice(0, 45) : ""}
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
