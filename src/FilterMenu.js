import React, { Component } from 'react';
import './FilterMenu.css';
import books from './books.json';

const genres = books.map((book) =>
	book.genre
)

const uniqGenre = genres.sort().filter(function(value, index, array){
	return (index === 0) || (value !== array[index-1]);
});

const genreList = uniqGenre.map((genre, index) =>
	<div className="genre-entry" tabIndex="0" key={index}>{genre}</div>
);


class FilterMenu extends Component {
	constructor(props) {
		super(props);
		this.state = { };

		this.chooseGenre = this.chooseGenre.bind(this);
	}

	chooseGenre(evt) {
		this.props.onGenreClick(evt.target.textContent);
	}

	render() {
		const genre = this.state.genre;
		return (
			<div className="filter-menu" onFocus={(e) => this.chooseGenre(e)}>{genreList}</div>
		);
	}
}

export default FilterMenu;