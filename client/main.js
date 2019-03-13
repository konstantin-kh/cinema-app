import Movies from './models/Movies.js'
import MovieListView from './views/MovieListView.js'
import MovieDetailsView from './views/MovieDetailsView.js'
import SessionsView from './views/SessionsView.js'
import router from './Routes.js'
import HeaderView from './views/HeaderView.js'
import TitleView from './views/TitleView.js'

let header = document.querySelector('#header');
let title = document.querySelector('#heading');
let container = document.querySelector('#route-container');

const headerView = new HeaderView({
  className: 'container-fluid'
});

const movieView = new MovieListView({
  model: new Movies('api/movies'),
  className: 'main-wrap'
});

const movieDetailsView = new MovieDetailsView({
  className: 'movies-detail-wrap'
});

const sessionsView = new SessionsView({
  className: 'sessions-wrap'
});


router.registerRoute({
  name: 'header',
  url: '/movies',
  view: headerView
});

router.registerRoute({
  name: 'movies',
  url: '/movies',
  view: movieView,
  title: 'Movies today',
  titleView: titleView,
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

//const {tagName='div', el, className='title', tagNameTitle='h1', text='Main title'} = options;
var mainTitle = router.routes.find(item => item.title !== undefined);
var titleView = new TitleView({
  text: mainTitle.title
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
  const headerRoute = router.routes.find(item => item.name === 'header');
  const headerViewRender = headerRoute.view;
  const titleRoute = router.routes.find(item => item.title !== undefined);
  const titleView = titleRoute.titleView;

  header.appendChild(headerViewRender.element);
  container.appendChild(view.element);

  history.pushState({name: route.name}, route.name, '/');

  view.initialize().then(() => {
    view.clear();
    view.render();
    headerViewRender.render();
    titleView.render();
    title.appendChild(titleView.element);
    header.appendChild(headerViewRender.element);
    container.appendChild(view.element)
  });
});

window.addEventListener('popstate', (e) => {
  let route = router.getRouteByName(e.state && e.state.name);
});