let itemTypes = {
    cart: cartItemRenderer,
    catalog: catalogItemRenderer
}


export default class ITEM {
    constructor(item, type) {
        this.item = item;
        this.type = type;
    }

    render() {
        return itemTypes[this.type](this.item)
    }
}

function catalogItemRenderer(item) {
    return `
                <div class="featured-items__item">
                    <div class="featured-items__item-top"><img src="${item.productImg}" alt="t-shirt">
                        <div class="add-hover-div">
                            <div>
                                <button name="add"
                                    data-id="${item.productId}"
                                    data-name="${item.productName}"
                                    data-img="${item.productImg}"
                                    data-price="${item.productPrice}">
                                <img src="../src/assets/img/cart_small.png" alt="cart_small">Add to Cart</button>
                                <a href="#"><i class="fas fa-retweet"></i></a>
                                <a href="#"><i class="far fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="featured-items__item-bottom">
                        <div>${item.productName}</div>
                        <div>$${item.productPrice}.00</div>
                    </div>
                </div>
            `;
}

function cartItemRenderer(item) {
    return `
                <div class="cart-dropdown__checked-items">
                    <img src="${item.productImg}" alt="pic">
                    <div>
                        <h3>${item.productName}</h3>
                        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                        <p>${item.amount} x $${item.productPrice}</p>
                    </div>
                    <button data-id=${item.productId} name="remove" class="fas fa-times-circle"></button>
                </div>
            `;
}