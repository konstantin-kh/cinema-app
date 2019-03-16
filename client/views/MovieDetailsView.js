import View from './View.js'
export default class MovieDetailsView extends View {
    constructor (options) {
        super(options);
    }

    setMovie(movie) {
        this.model = movie;
        return this.render();
    }
    render () {
        const {name, banner, genre, director, year, description} = this.model;
        
        let movie = document.createElement('div');
        movie.innerHTML = ` <div><a class="btn-back" href='/'>Back to Movies</a></div>
                            <div class="poster">
                                <h3>${name}</h3>
                                <div class="bg-stretch"><img src="${banner}" alt="${name}" /></div>
                            </div>
                            <div class="text-holder">
                                <div class="meta">
                                    <div>Genre: ${genre}</div>
                                    <div>Year: ${year}</div>
                                    <div>Direcior: ${director}</div>
                                </div>
                                <div class="description">
                                    <p>Description: ${description}</p>
                                </div>
                            </div>`;
        this.clear();
        this.element.appendChild(movie);
        return this;
    }
}