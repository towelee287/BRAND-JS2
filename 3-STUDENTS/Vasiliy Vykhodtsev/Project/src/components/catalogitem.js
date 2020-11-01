export default class CatalogItem {
    constructor(item) {
        this.item = item;
    }
    render () {
        return `
		<div class="featured__item">
			<div>
				<img src="${this.item.productImg}" alt="">
				<div class="item__hover">
					<button name="add" class="cart" 
					data-id="${this.item.productId}"
					data-name="${this.item.productName}"
					data-img="${this.item.productImg}"
					data-price="${this.item.productPrice}"
					><img src="../src/assets/img/Forma_1_copy.svg" alt="">Add to Cart</button>
				</div>
			</div>
			<div class="item__bot">${this.item.productName}<br><span>$${this.item.productPrice}</span>
			</div>

		</div>
		`
    }
}