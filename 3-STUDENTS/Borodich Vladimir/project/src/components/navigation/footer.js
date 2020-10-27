import Navigation from './navigation.js';

class FooterNavigation extends Navigation {
    constructor() {
        super('footer-menu.json');
    }

    _render() {
        for (let key in this._items) {
            this._container = document.querySelector(`#${key}`);
            let content = '';
            for (let item of this._items[key]) {
                content += `<li class="footer-menu__item">
                                <a href="${item.href}" class="footer-menu__link">${item.value}</a>
                            </li>`;
            }
            this._container.innerHTML = content;
        }
    }
}

export default FooterNavigation;
