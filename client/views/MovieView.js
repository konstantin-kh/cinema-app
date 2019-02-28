import View from './View.js'
export default class MovieView extends View {
    constructor (options) {
        super(options)
    }
    render () {
        this.element.innerHTML = `<h3 data-id="${this.model.id}" class="movie-name">
                                    <a href=#movies/${this.model.id}>${this.model.name}</a>
                                  </h3>
                                  <img src="${this.model.url}" alt="${this.model.name}" class="movie-poster" /> `;
        return this;
    }
}