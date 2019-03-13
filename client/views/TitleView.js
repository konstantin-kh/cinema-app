export default class Title {
    constructor (options) {
        const {tagName='div', el, subEl, className='title', tagNameTitle='h1', text} = options;
        this.tagName = tagName;
        this.tagNameTitle = tagNameTitle;
        this.element = el || document.createElement(this.tagName);
        this.elementTitle = subEl || document.createElement(this.tagNameTitle);
        className && this.element.classList.add(className);
        this.text = text;
    }
    render () {
        this.elementTitle.innerHTML = `${this.text}`;
        this.element.appendChild(this.elementTitle);
        return this;
    }
}