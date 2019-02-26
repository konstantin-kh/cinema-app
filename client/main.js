import Movies from './models/Movies.js'
import MovieListView from './views/MovieListView.js'
import MovieDetailsView from './views/MovieDetailsView.js'
import Template from './views/Template.js'

let movieView = new MovieListView({
	model:  new Movies()
});

const movieDetailsView = new MovieDetailsView({

});

const template = new Template();

const routes = [{
	name: 'movies',
	url: '#movies',
	view: movieView,
	default: true
},
{
	name: 'movieDetails',
	url: '#movies/:id',
	view: movieDetailsView
}]

function matchView(url) {
	const view = null;
	return view;
}
let container = document.getElementById('route-container');
let navbar = document.querySelector('.navbar');

window.addEventListener('hashchange', e => {
	let parts = window.location.hash.split('/');
	let id = parts[parts.length-1];
	let view = null
	container.innerHTML = '';
	if (id === '#movies') {
		
		let route = routes.find(item => item.url === id);
		view = route.view.render();
		
	} else {
		 view = movieDetailsView.setMovie(movieView.model.getMovieById(id))
	}
	container.appendChild(view.element);
	navbar.appendChild(template.renderNav);
})
window.addEventListener('load', e => {
	const route = routes.find(item => item.default === true);
	const view = route.view.render();
	container.appendChild(view.element)
})



