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

	//event callback
	chooseGenre(evt) {
		//if not a valid genre, show all books
		if(!uniqGenre.includes(evt.target.textContent)){
			return this.props.onGenreClick('');

		}

		//helper variables to toggle classes
		let targetParentNode = evt.target.parentNode;
		let prevChosenGenre = '';

		//remove all target-genre styles from filter menu
		for(let i = 0; i < targetParentNode.children.length; i++){
			if(targetParentNode.children[i].classList.contains("target-genre")){
				prevChosenGenre = targetParentNode.children[i].textContent;
				targetParentNode.children[i].classList.remove("target-genre");
			}
		}

		//if the same genre is selected twice, show all books
		if(prevChosenGenre === evt.target.textContent){
			this.props.onGenreClick('');
		//if it is a new genre, add target genre styles and display books
		} else {
			this.props.onGenreClick(evt.target.textContent);
			evt.target.classList.add("target-genre");
		}
	}

	render() {
		const genre = this.state.genre;
		return (
			<div className="filter-menu" onKeyDown={(e) => this.chooseGenre(e)} onClick={(e) => this.chooseGenre(e)}>{genreList}</div>
		);
	}
}

export default FilterMenu;