import Navigation from './navigation.js';

class MainNavigation extends Navigation {
    constructor() {
        super();
        this._container = document.querySelector('#main-menu');
    }

    _render() {
        let content = `<li class="nav-close"><label class="" for="nav-drop"><i class="far fa-times-circle"></i></label></li>`;
        for (let item of this._items) {
            content += `<li class=" menu__item ${item.href === 'index.html' ? 'menu__item_active' : ''}">
                            <a href="${item.href}" class=" menu__link menu__link_first">${item.value}</a>
                            ${item.subMenu ? this._renderSubMenu(item.subMenu) : ''}
                        </li>`;
        }
        this._container.innerHTML = content;
    }

    _renderSubMenu(subMenu) {
        let content = '<div class="drop-menu nav__drop-menu">';
        for (let block of subMenu) {
            content += `<div class="drop-menu__block ">`;
            for (let item of block) {
                switch (item.tag) {
                    case 'a':
                        content += `<a href="${item.href}" class="drop-menu__link">
                                        ${item.value}
                                    </a>`;
                        break;
                    case 'h3':
                        content += `<a href="${item.href}" class="drop-menu__link drop-menu__link-heading">
                                        <h3 class="drop-menu__heading">${item.value}</h3>
                                    </a>`;
                        break;
                    case 'div':
                        content += `<a href="${item.href}" class="drop-menu__banner">
                                        <div class="drop-menu__banner-text">${item.value}</div>
                                    </a>`;
                        break;
                }
            }
            content += '</div>';
        }
        content += '</div>';
        return content;
    }
}

export default MainNavigation;
