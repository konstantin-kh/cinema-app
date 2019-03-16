import View from './View.js'
export default class MovieView extends View {
    constructor (options) {
        super(options)
    }
    render () {
        this.element.innerHTML = `<a class="movie-detail-link" data-id="${this.model.id}" href=/movies/${this.model.id}>
                                    <img src="${this.model.url}" alt="${this.model.name}" class="movie-poster" />
                                  </a>
                                  <h3 class="movie-name">
                                    <a class="movie-detail-link" data-id="${this.model.id}" href=/movies/${this.model.id}>${this.model.name}</a>
                                  </h3>`;
        return this;
    }
}