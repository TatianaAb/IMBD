class ResultBox extends React.Component {
  constructor(){
    super()
    this.state = {
      results: []
    }

    this.addMovies = this.addMovies.bind(this)
  }

  addMovies(movies){
   this.setState({results: movies})
  }

  render(){
    return(
    <div>
      <Header addMovies={this.addMovies} />
      <section className="container">
        <section id="tweets-container">
          <h3>Search results</h3>
          <ul>
          {this.state.results.map((movie, i) => {
            return <SearchResults movie={movie} key={i}/>
            })
          }
          </ul>
        </section>
      </section>
     </div>
    )
  }
}

