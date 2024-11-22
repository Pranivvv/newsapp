import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    mode: 'light',
    apiKey: '56593e3a139c4e5f8b5c1a1e474239e6',
    pageSize: 8,
    country: 'us',
    category: 'general'
  }

  static propTypes = {
    mode: PropTypes.string,
    apiKey: PropTypes.string,
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loding: false,
      page: 1,
    }
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount() {
    this.updateNews()
  }

  prevPage = async () => {
    // console.log(this.state.page-1)
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }

  nextPage = async () => {
    // console.log(this.state.page+1)
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }

  render() {
    return (
      <div className='container d-flex align-items-center flex-column  mb-3' data-bs-theme={this.props.mode}>
        <h1 className='my-3 ' >Top News - From all around the world</h1>
        {this.state.loading && <Spinner />}
        {
          (!this.state.loading) &&
          <div className='d-flex flex-wrap justify-content-center' >
            {this.state.articles.map((article) => {
              const { urlToImage: imageUrl, title, description, url: newsUrl, author, publishedAt: date } = article;
              if (imageUrl && title && description && newsUrl) {
                return <div className="my-3 mx-3 " key={article.url}>
                  <NewsItem imageUrl={imageUrl} title={title >= 43 ? title : (title.slice(0, 45) + '...')} description={description >= 88 ? description : (description.slice(0, 90) + '...')} newsUrl={newsUrl} mode={this.props.mode} author={!author ? "unknown" : author} date={date} />
                </div>
              }
            })}
          </div>
        }
        <div className="container d-flex flex-wrap justify-content-around">
          <button disabled={this.state.page <= 1} type="button" className={`btn btn-outline-${this.props.mode === 'light' ? 'dark' : 'light'}`} onClick={this.prevPage}>&larr; Previous </button>
          <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className={`btn btn-outline-${this.props.mode === 'light' ? 'dark' : 'light'}`} onClick={this.nextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
