import store from './data.js'

store.getMovies().then(result => {
	let movies = new Movies(result);
	let movieDetailsView = new MovieDetailsView(movies.getMovies()[0], document.querySelector('#movie-details'));
	let movieView = new MovieListView(movies, document.querySelector('#movie-list'));
	
	movieView.render();
})

class Movies {
	constructor (movies) {
		this.movies = movies;
	}

	getMovies() {
		return this.movies;
	}

	getMovieById(id) {
		return this.movies.find(item => item.id === id);
	}

	addMovie(movie) {
		this.movies.push(movie);
	}
}

class View {
	constructor (el) {
		this.element = el || document.createElement('div');
	}
	
	render() {
		return this;
	}

	clear() {
		this.element.innerHTML = '';
		return this;
	}
}

// Create Class MovieView extend View
// Change View constructor to create element if not passed

class MovieView extends View {
	constructor(el) {
		super(el);
		this.element = el;
		console.log()
	}

	render() {
		let movies = this.model.getMovies();
		movies.forEach(item => {
			element.innerHTML = `<div data-id="${item.id}" class="movie-item">${item.name}</div>`;
		});
		
		return this;
	}
	// let movie = document.createElement('div'); // create element
	// movie.innerHTML = `<div data-id="${item.id}" class="movie-item">${item.name}</div>`; // set innerHTML
}

class MovieListView extends View {
	constructor(model, el) {
		super(el);
		this.model = model;
		this.views = [];
		this.detailsElement = new MovieDetailsView(this.model.getMovies()[0], document.querySelector('#movie-details'));
		this.model.movies.forEach(() => this.views.push(new MovieView));
		debugger
		this.element.addEventListener('click', (e) => {
			const target = e.target;
			if (target.classList.contains('movie-item')) {
				this.detailsElement.setMovie(this.model.getMovieById(target.dataset.id));
			}
		});
	}

	render() {
		// let movies = this.model.getMovies();
		this.views.forEach(item => {
			// let movie = document.createElement('div'); // create element
			// movie.innerHTML = `<div data-id="${item.id}" class="movie-item">${item.name}</div>`; // set innerHTML
			this.element.appendChild(item); // add innerHTML to the element
		});

		return this;

		// this.detailsElement.render();
	}
}

class MovieDetailsView extends View {
	constructor (movie, el) {
		super(el);
		this.movie = movie;
	}

	setMovie(movie) {
		this.movie = movie;
		this.render();
	}

	render () {
		const {name, director, year} = this.movie;
		let movie = document.createElement('div');
		movie.innerHTML = `<div>title: ${name}</div>
							<div>year: ${year}</div>
							<div>director: ${director}</div>`;
		this.clear();
		this.element.appendChild(movie);
		
		return this;
	}
}