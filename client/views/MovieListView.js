import View from './View.js'
import MovieView from './MovieView.js'
import router from '../Routes.js'
export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.movieViews = [];
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
        // this.element.addEventListener('click', (e)=> {
        //     const target = e.target;
        //     if (target.classList.contains('movie-name')) {
        //         this.detailElement.setMovie(this.model.getMovieById(target.dataset.id))
        //     }
        // });

        // const addButton = document.querySelector('#add-new');
        // addButton.addEventListener('click', this.addMovie.bind(this));
    }
    addMovie () {
        const movie = {
            name: 'New Movie',
            id: '22'
        }
        this.element.appendChild(new MovieView({
            model: movie
        }).render().element)
    }
    render() {
        this.element.innerHTML = `<div class="title"><h1>Movies today</h1></div>`;

        this.movieViews.forEach(view => {
            this.element.appendChild(view.render().element)
        })
        return this;
    }
}
