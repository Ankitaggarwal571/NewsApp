import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
 


export  class NewsPart extends Component {
    
  constructor() {
    super();
    
    this.state = {
      article: [],
      loading: false
     
    }
  }
  async componentDidMount() {
    var url = `https://newsapi.org/v2/everything?q=${this.props.catagory}&apiKey=28cc2db8dbbb453eaae851abf2064afa&page=${this.pageNo}&pagesize=15`
    this.setState({loading:true})
    var data = await fetch(url)
    var convertData = await data.json()
    this.setState({ article: convertData.articles })
    this.setState({loading:false})
    // console.log(this.props.catagory)
  }
 
  
  previous = async () => {
    this.pageNo = this.pageNo - 1
    var url = `https://newsapi.org/v2/everything?country=inq=${this.props.catagory}&apiKey=28cc2db8dbbb453eaae851abf2064afa&page=${this.pageNo}&pagesize=15`
    this.setState({loading:true})
    var data = await fetch(url)
    var convertData = await data.json()
    this.setState({ article: convertData.articles })
    this.setState({loading:false})
    // console.log("this is Previous"+this.pageNo)
  }

  next = async () => {
      this.pageNo = this.pageNo + 1
      var url = `https://newsapi.org/v2/everything?q=${this.props.catagory}&apiKey=28cc2db8dbbb453eaae851abf2064afa&page=${this.pageNo}&pagesize=15`
      this.setState({loading:true})
      var data = await fetch(url)
      var convertData = await data.json()
      this.setState({ article: convertData.articles, })
      this.setState({loading:false})
      // console.log(this.state.totalResults)
    }
 

  render() {

    return (
      <>
        <div className="container my-4">
          <h1 className='text-center'>{`Today's Top Headline Of - ${this.props.catagory.charAt(0).toUpperCase()}${this.props.catagory.substr(1,this.props.catagory.length)}`}</h1>
            {this.state.loading?<Spinner/>:""}
          <div className="row">
            {!this.state.loading && this.state.article.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItems title={element.title.slice(0, 40)} disrcription={element.description ? element.description.slice(0, 75) : "333"} imageUrl={element.urlToImage? element.urlToImage : "https://www.freecodecamp.org/news/content/images/2021/03/ykhg3yuzq8931--1-.png"} newsUrl={element.url} publish={element.publishedAt} />
              </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.pageNo <= 1} onClick={this.previous} className="btn btn-primary">&larr; Previous</button>
            <button type="button" disabled={this.pageNo >= 6} className="btn btn-primary" onClick={this.next}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}

export default NewsPart