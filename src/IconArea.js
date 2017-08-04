import React, { Component } from 'react';
import './IconArea.css';
import books from './books.json';

function renderBookList() {
	return this.state.currentlyDisplayed.map((book, index) =>
			<div className="book-entry" key={index}>
				<img className="book-image" src={book.path} alt={book.title} tabIndex="0" />
			</div>
	);
}

class IconArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyData: '',
			currentlyDisplayed: books
		};

		this.onGenreClick = this.onGenreClick.bind(this);
		this.generateBookList = this.generateBookList.bind(this);
		this.renderBookList = renderBookList.bind(this);

	}

	onGenreClick(genre) {
		let newBookList = books.filter((bookEntry) =>
			bookEntry.genre.includes(genre));

		return this.generateBookList(newBookList);
	}

	generateBookList(bookList){

		if(bookList.length === 0) {
			this.state = {
				keyData: '',
				currentlyDisplayed: books
			};
		} else {
			this.state = {
				keyData: '',
				currentlyDisplayed: bookList
			};
		}

		return this.renderBookList(bookList);
	}

	render() {
		const genre = this.props.genre;
		this.onGenreClick(genre);
		return (
			<div className="icon-area">
				{this.renderBookList()}
			</div>
		);
	}
}

export default IconArea;