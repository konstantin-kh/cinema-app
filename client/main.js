import Movies from './models/Movies.js'
import MovieListView from './views/MovieListView.js'
import MovieDetailsView from './views/MovieDetailsView.js'
import SessionsView from './views/SessionsView.js'

let container = document.getElementById('route-container');

let movieView = new MovieListView({
  model:  new Movies('api/movies'),
  className: 'main-wrap'
});

const movieDetailsView = new MovieDetailsView({
  className: 'movies-detail-wrap'
});

const sessionsView = new SessionsView({
  className: 'sessions-wrap'
});

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
},
{
  name: 'movieDetails',
  url: '#sessions',
  view: sessionsView
}]

function matchView(url) {
  let parts = window.location.hash.split('/');
  let id = parts[parts.length-1];
  let view = null;
  let route = routes.find(item => item.url === id);
  let routeDefault = routes.find(item => item.default === true);

  if (route) {
    view = route.view.render();
  } else if (typeof route === "undefined") {
    view = movieDetailsView.setMovie(movieView.model.getMovieById(id))
  } else {
    view = routeDefault.view.render();
  }
  
  return view;
}

window.addEventListener('hashchange', e => {
  let view = null;
  
  container.innerHTML = '';
  view = matchView(window.location.hash);
  container.appendChild(view.element);
})

window.addEventListener('load', e => {
  let view = null;
  view = matchView(window.location.hash);

  container.appendChild(view.element)

  view.initialize().then(() => {
    view.render();
    container.appendChild(view.element)
  });
})