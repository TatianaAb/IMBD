class SearchResults extends React.Component {
  render(){

    let movie = this.props.movie

    return(
      <li className="tweet">
        <img className="avatar" src={movie.Poster} alt=""/>
        <div className="tweet-content">

          <p>
            <span className="title">{movie.Title}</span>
            <span className="cast">{movie.Actors}</span>
            <span className="year">{movie.Released}</span>
          </p>
          <p>{movie.Plot}</p>
        </div>
      </li>
      )
  }
}
