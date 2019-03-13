import View from './View.js'
export default class HeaderView extends View {
    constructor(options) {
        super(options)
    }
    render() {
        this.element.innerHTML = `<div class="header-holder">
                                        <div class="logo">
                                            <a href="/"><img src="images/logo.svg" width="75" height="70" alt="Cinema App"></a>
                                        </div>
                                        <nav class="navbar">
                                            <ul class="nav nav-left">
                                                <li><a href="/">Movies</a></li>
                                                <li><a href="/sessions">Sessions</a></li>
                                            </ul>
                                            <a class="btn-outline-default" href="/">Log in</a>
                                        </nav>
                                    </div>`;
        return this;
    }
}