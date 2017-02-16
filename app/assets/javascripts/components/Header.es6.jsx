class Header extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
   handleSubmit(e) {
      e.preventDefault();

      let search = this.refs.content.value
      $.ajax({
        url: 'http://www.omdbapi.com/?s=' + search,
        method: 'get'
      }).success(response => {
        let array = response.Search
        this.props.addMovies(array)
      }
      )
   }

  render(){
    return(
   <header id="top-nav">
   <div id="brand">Movies</div>
   <form id="search-form" action='/' method ='get' onSubmit={this.handleSubmit}>
     <input ref='content' id="search" type="text" name="query"/>
  </form>
  <i className="fa fa-search"></i>
</header>
)
  }
}
