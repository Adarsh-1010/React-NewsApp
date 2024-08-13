import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {


  constructor(){
    super();
    console.log("Hello I am constructor from news component");
    this.state={
      articles:[],
      loading:false,
      page:1

    }
  }
   async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/everything?q=tesla&from=2024-08-10&sortBy=publishedAt&apiKey=447ff104f34b4984abd8b28ad1e70961"
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
   }
   
  render() {
    console.log("hello");
    return (
      <div className='container my-3'>
        <h2>NewsMonkey -Top Headlines</h2>

        <div className='row'>
        {this.state.articles.map((element)=>{
         return <div className='col-md-4'>
          <NewsItem key={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}
