import View from './View.js'
export default class Template extends View {
	constructor(options) {
		super(options)
	}
	renderNav() {
		this.element.innerHTML = `<ul data-id="${this.model.id}" class="nav">
									<li><a href=#movies>Movies</a></li>
									<li><a href=#sessions>Sessions</a></li>
								 </ul>`;
		return this;
	}
}