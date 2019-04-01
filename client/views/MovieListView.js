import View from './View.js'
import MovieView from './MovieView.js'
import router from '../Routes.js'

export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.movieViews = [];
        this.filteredMovieViews = [];
        this.delegateEvents();
    }

    initialize () {
        return this.model.getMovies().then(result => {
            result.forEach((item) => {
                this.movieViews.push(new MovieView({
                    model: item,
                    tagName: 'div',
                    className: 'movie-item'
                }))
            })
        })
    }

    delegateEvents () {
        this.element.addEventListener('click', (e)=> {
            e.preventDefault();
            let target = e.target;

            while (target !== e.target.classList.contains('.movie-detail-link')) {
                if (target.classList.contains('movie-detail-link')) {

                    const movie = this.model.getMovieById(target.dataset.id);
                    let route = router.getRouteByName('details');

                    history.pushState({name: route.name}, 'movie-detail', `/movies/${target.dataset.id}`);

                    route.view.setMovie(movie);

                    let container = document.getElementById('route-container');

                    this.title.innerHTML = '';
                    this.title.innerHTML = '<h1>Movies details</h1>'
                    this.filter.innerHTML = '';

                    container.innerHTML = '';
                    container.appendChild(route.view.element);
                    return
                }
                target = target.parentNode;
            }
        });

        this.filter = document.createElement('div');
        this.filter.className = 'search-area'
        this.filter.innerHTML = `<input type="text" class="filter" id="filter" placeholder="Search..." />`;
        
        this.filter.addEventListener('input', (e) => {
            let query = e.target.value.toLowerCase();

            if (!e.target.classList.contains('filter')) return;

            console.log(e.target.value);
            this.filteredMovieViews = this.movieViews.filter(movie => {
               return movie.model.name.toLowerCase().indexOf(query) === 0;
            });

            this.renderList();
        });

        // this.list = document.createElement('div');
        // this.list.className = 'list';

        this.title = document.createElement('div');
        this.title.className = 'title';
        this.title.innerHTML = '<h1>Movies today</h1>';

        this.render();
    }
    // addMovie () {
    //     const movie = {
    //         name: 'New Movie',
    //         id: '22'
    //     }
    //     this.element.appendChild(new MovieView({
    //         model: movie
    //     }).render().element)
    // }
    render() {
        let fragment = document.createDocumentFragment();
        const titleWrap = document.querySelector('#heading');

        fragment.appendChild(this.title);
        fragment.appendChild(this.filter);

        titleWrap.appendChild(fragment);

        // this.element.appendChild(this.list);
        this.renderList();

        this.movieViews.forEach(view => {
            this.element.appendChild(view.render().element)
        });
        // this.element.innerHTML = `<div class="title">
        //                             <h1>Movies today</h1>
        //                         </div>`;

        
        return this;
    }
    renderList() {
        this.element.innerHTML = '';
        
        this.filteredMovieViews.forEach(view => {
            this.element.appendChild(view.render().element)
        });
    }
}
