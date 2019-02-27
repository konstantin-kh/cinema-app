import View from './View.js'
export default class Sessions extends View {
	constructor(options) {
		super(options)
	}

	render () {
		this.element.innerHTML = ` <div><a href='#movies'>Back to List</a></div>
								<div class="title"><h1>Sessions</h1></div>
								<h3>Error</h3>`;
		return this;
	}
}