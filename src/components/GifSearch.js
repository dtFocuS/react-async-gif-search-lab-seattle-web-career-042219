import React, { Component } from 'react';


class GiftSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm)
    this.props.onHandleSearch(this.state.searchTerm)
  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='term' id="term" value={this.state.searchTerm} onChange={this.handleChange}/>
          <button>Search</button>
        </form>

      </div>
    )
  }

}


export default GiftSearch;
