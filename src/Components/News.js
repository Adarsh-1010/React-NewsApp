import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
  render() {
    return (
      <div>
        This is a News Component
        <NewsItem/>
      </div>
    )
  }
}
