import View from './View.js'
export default class MovieDetailsView extends View {
	constructor (options) {
		super(options);
	}

	setMovie(movie) {
		this.model = movie;
		this.render();
	}
	render () {
		const {name, genre, director, year, description} = this.model;
		//const name = this.movie.name; const director = this.movie.directore; const year = this.movie.year;
		let movie = document.createElement('div');
		movie.innerHTML = `<h3>${name}</h3>
							<div>${year}</div>
							<div>${genre}</div>
							<div>${director}</div>
							<div><p>${description}</p></div>`;
		this.clear();
		this.element.appendChild(movie);
		return this;
	}
}