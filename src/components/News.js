import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super();
    this.state={
      articles: [],
      loding: false,
      page:1,
    }
  }

  
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56593e3a139c4e5f8b5c1a1e474239e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  prevPage= async ()=>{
    console.log(this.state.page-1)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56593e3a139c4e5f8b5c1a1e474239e6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page:this.state.page-1
    })
  }

  nextPage= async ()=>{
    console.log(this.state.page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56593e3a139c4e5f8b5c1a1e474239e6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page:this.state.page+1
    })
  }

  render() {
    return (
      <div className='container d-flex align-items-center flex-column  mb-3' data-bs-theme={this.props.mode}>
        <h1 className='my-3 ' >Top News - From all around the world</h1>
        <Spinner />
        <div className='d-flex flex-wrap justify-content-center' >
          {this.state.articles.map((article)=>{
            const { urlToImage: imageUrl, title, description, url: newsUrl } = article;
            if(imageUrl && title && description && newsUrl){
              return <div className="my-3 mx-3 " key={article.url}>
                      <NewsItem imageUrl={imageUrl} title={title >= 43 ? title : (title.slice(0,45)+'...')} description={description >= 88 ? description : (description.slice(0,90)+'...')} newsUrl={newsUrl} mode={this.props.mode} />
                    </div>
            }
          })}
        </div>
        <div className="container d-flex flex-wrap justify-content-around">
          <button disabled={this.state.page<=1} type="button" className={`btn btn-outline-${this.props.mode==='light'?'dark':'light'}`} onClick={this.prevPage}>&larr; Secondary</button>
          <button disabled={(this.state.page + 1)>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className={`btn btn-outline-${this.props.mode==='light'?'dark':'light'}`} onClick={this.nextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
