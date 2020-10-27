class Navigation {
    constructor(url = 'main-menu.json') {
        this._url = 'https://raw.githubusercontent.com/wowankz/static/master/shop/menu/' + url;
        this._items = null;
        this._container = null;
        this._init();
    }

    _render() {}

    async _init() {
        await this._getItems();
        this._render();
    }

    async _getItems() {
        let res = await fetch(this._url);
        res.ok ? (this._items = await res.json()) : (this._items = []);
    }
}

export default Navigation;
