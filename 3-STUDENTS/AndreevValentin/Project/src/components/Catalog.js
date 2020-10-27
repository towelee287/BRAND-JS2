import CatalogItem from "./CatalogItem.js";

export default class Catalog {
	constructor(cart, container, itemsPerRow) {
		this.cart = cart;
		this.container = container;
		this.items = {};

		fetch(
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/catalog.json"
		).then((response) => {
			return response.json();
		}).then((json) => {
			json.forEach(jsonItem => {
				this.items[jsonItem.id] = new CatalogItem(jsonItem.id, jsonItem.name,
					jsonItem.price, jsonItem.img);
			});

			this._handleEvents();
			this._render(itemsPerRow);
		});
	}

	_handleEvents() {
		this.container.addEventListener("click", e => {
			if(!e.target.classList.contains("snippet__addToCart")) {
				return;
			}

			const id = +e.target.dataset.itemId;
			this.cart.add(this.items[id]);
		});
	}

	_render(itemsPerRow) {
		let html = Object.values(this.items).map(item => item.toHtml()).join("");

		// A hack to get items on the last row to align
		for(let i = 0; i < itemsPerRow - 1; ++i) {
			html += '<div class="snippet__filler"></div>';
		}

		this.container.innerHTML = html;
	}
};
