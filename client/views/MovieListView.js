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
            const target = e.target;
            
            const movie = this.model.getMovieById(target.dataset.id);
            let route = router.getRouteByName('details');

            if (!e.target.classList.contains('movie-detail-link')) return;

            history.pushState({name: route.name}, 'movie-detail', `/movies/${target.dataset.id}`);
            route.view.setMovie(movie);

            let container = document.getElementById('route-container');
            
            container.innerHTML = '';
            container.appendChild(route.view.element);
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

        this.list = document.createElement('div');
        this.list.className = 'list';

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
        this.element.appendChild(this.filter);
        this.element.appendChild(this.list);
        this.element.appendChild(this.title);
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
        this.list.innerHTML = '';
        
        this.filteredMovieViews.forEach(view => {
            this.element.appendChild(view.render().element)
        });
    }
}
