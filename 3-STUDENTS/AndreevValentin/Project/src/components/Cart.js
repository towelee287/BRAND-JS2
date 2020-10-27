import {padNum} from "./common.js";
import CartItem from "./CartItem.js";

export default class Cart {
	constructor() {
		this.popup = document.getElementById("cartPopup");
		this.itemsWrapper = document.getElementById("cartPopupItems");
		this.totalBox = document.getElementById("cartPopupTotal");
		this.items = {};

		fetch(
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/cart.json"
		).then((response) => {
			return response.json();
		}).then((json) => {
			json.forEach(jsonItem => {
				this.items[jsonItem.id] = new CartItem(jsonItem.id, jsonItem.name,
					jsonItem.price, jsonItem.img, jsonItem.qty);
			});

			this._handleEvents();
			this._render();
		});
	}

	_handleEvents() {
		document.getElementById("cartPopupButton").addEventListener("click", () => {
			this.popup.classList.toggle("hidden");
		});
		this.itemsWrapper.addEventListener("click", e => {
			if(!e.target.classList.contains("cartPopup__itemRemove")) {
				return;
			}

			this.remove(+e.target.dataset.itemId);
		});
	}

	_render() {
		this.itemsWrapper.innerHTML =
			Object.values(this.items).map(item => item.toHtml()).join("");

		const total =
			Object.values(this.items).reduce((a, b) => a + b.price * b.qty, 0);
		this.totalBox.innerHTML =
			`\$${Math.floor(total / 100)}.${padNum(total % 100)}`;
	}

	add(newItem) {
		if(newItem.id in this.items) {
			++this.items[newItem.id].qty;
		} else {
			this.items[newItem.id] = new CartItem(newItem);
		}
		this._render();
	}

	remove(id) {
		if(this.items[id].qty == 1) {
			delete this.items[id];
		} else {
			--this.items[id].qty;
		}
		this._render();
	}
}
