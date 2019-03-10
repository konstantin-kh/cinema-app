import Movies from './models/Movies.js'
import MovieListView from './views/MovieListView.js'
import MovieDetailsView from './views/MovieDetailsView.js'
import SessionsView from './views/SessionsView.js'
import router from './Routes.js'

const movieView = new MovieListView({
  model: new Movies('api/movies'),
  className: 'main-wrap'
});

let container = document.getElementById('route-container');

let movieDetailsView = new MovieDetailsView({
  className: 'movies-detail-wrap'
});

let sessionsView = new SessionsView({
  className: 'sessions-wrap'
});

router.registerRoute({
  name: 'movies',
  url: '/movies',
  view: movieView,
  default: true
});

router.registerRoute({
  name: 'details',
  url: '/movies/:id',
  view: movieDetailsView
});

router.registerRoute({
  name: 'sessions',
  url: '/sessions',
  view: sessionsView
});

// function matchView(url) {
//   let parts = window.location.hash.split('/');
//   let id = parts[parts.length-1];
//   let view = null;
//   let route = routes.find(item => item.url === id);
//   let routeDefault = routes.find(item => item.default === true);

//   if (route) {
//     view = route.view.render();
//   } else if (parts[0] === '' || parts[0] === null || parts[0] === undefined) {
//     view = routeDefault.view.render();
//   } else {
//     view = movieDetailsView.setMovie(movieView.model.getMovieById(id))
//   }
  
//   return view;
// }

// window.addEventListener('hashchange', e => {
//   let view = null;
  
//   container.innerHTML = '';
//   view = matchView(window.location.hash);
//   container.appendChild(view.element);
// });

window.addEventListener('load', e => {
  const route = router.routes.find(item => item.default === true);
  const view = route.view;

  container.appendChild(view.element);

  history.pushState({name: route.name}, route.name, '/');

  view.initialize().then(() => {
    view.clear();
    view.render();
    container.appendChild(view.element)
  });
});

window.addEventListener('popstate', (e) => {
  let route = router.getRouteByName(e.state && e.state.name);
});