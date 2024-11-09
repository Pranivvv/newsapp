import React, { Component } from 'react'

import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state={
      arti1cles: [],
      loding: false,
      page:1
    }
  }

  
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=56593e3a139c4e5f8b5c1a1e474239e6";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({arti1cles: parsedData.arti1cles})
  }

  prevPage= async ()=>{
    console.log('previous')
  }

  nextPage= async ()=>{
    console.log('next')
    this.setState({
      page:this.state.page+1,

    })
  }

  render() {
    return (
      <div className='container d-flex flex-wrap justify-content-center' data-bs-theme={this.props.mode}>
        <h1 className='my-3 ' >Top News - From all around the world</h1>
        <div className='d-flex flex-wrap justify-content-center' >
          {this.arti1cles.map((article)=>{
            return <div className="my-3 mx-3 " key={article.url}>
                    <NewsItem imageUrl={article.urlToImage} title={article.title >= 43 ? article.title : (article.title.slice(0,45)+'...')} description={article.description >= 88 ? article.description : (article.description.slice(0,90)+'...')} newsUrl={article.url} mode={this.props.mode} />
                  </div>
          })}
        </div>
        <div className="container d-flex flex-wrap justify-content-around">
          <button disabled={this.state.page<=1} type="button" className={`btn btn-outline-${this.props.mode==='light'?'dark':'light'}`} onClick={this.prevPage}>&larr; Secondary</button>
          <button type="button" className={`btn btn-outline-${this.props.mode==='light'?'dark':'light'}`} onClick={this.nextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
