import React, { Component } from 'react';
import IconArea from './IconArea';
import FilterMenu from './FilterMenu';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.handleGenreClick = this.handleGenreClick.bind(this);
    this.state = { genre: '' }
  }

  handleGenreClick(genre){
    this.setState({genre: genre})
  }

  render() {
    const genre = this.state.genre;
    return (
      <div className="app">
      <header>
        <h1 className="title">Books</h1>
        <h3 className="subtitle">Filter by genre</h3>
      </header>
      <div className="main-content">
        <FilterMenu className="filter-menu" onGenreClick={this.handleGenreClick} />
        <IconArea className="icon-area" genre={genre} />
      </div>
      </div>
    );
  }
}

export default App;
