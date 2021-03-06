import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'

export default class SearchableMovieReviewsContainer extends React.Component{
  state = {
    searchTerm: '',
    reviews: []
  }

  handleChange = (event) => {
   this.setState({
     searchTerm: event.target.value
   })
   fetch(URL + `api-key=${NYT_API_KEY}&query=` + this.state.searchTerm)
   .then(response => response.json())
   .then(data => this.setState({reviews: data.results}))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        Search for Movie Reviews:
        <input type="text" onChange={this.handleChange} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
