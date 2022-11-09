import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [];
    constructor(){
        super();
        
        this.state = {
            articles: this.articles,
            loading: false
        }
        
        }

        async componentDidMount(){
          let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7448d9ab113940f09a93e3c61fa7bfa3"

          let data = await fetch(url);
          let parsedData = await data.json();
          
          this.setState({
            articles: parsedData.articles
          })
        }
        
    
  render() {
    return (
        <>
        <div className='flex justify-center'>
        <h1 className='text-slate-800 text-6xl mb-4 font-serif' >Today's Headlines</h1></div>
        
      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 auto-cols-max '>
      {this.state.articles.map((element)=>{
            return <NewsItem key={element.url} title={element.title} description = {element.description} imgurl = {element.urlToImage} newsurl={element.url}/>
        })}
        
        
        
      </div>
      </>
    )
  }

}
export default News
