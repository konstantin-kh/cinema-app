export default class Template{
	renderNav() {
		// const {name, director, year} = this.model;
		let nav = document.createElement('div');

		nav.innerHTML = `<ul class="nav">
							<li><a href=#movies>Movies</a></li>
							<li><a href=#sessions>Sessions</a></li>
						</ul>`;
		return this;
	}
}