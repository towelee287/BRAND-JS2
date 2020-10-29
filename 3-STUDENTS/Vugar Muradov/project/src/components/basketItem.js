export default class BasketItem {
    constructor(item) {
        this.item = item;
    }
    render() {
      return `
        <div class="cartProduct">
        <div class="d-flex justify-content-between">
        <div><img src="${this.item.img}" width="72px" alt="cartPhoto"></div>
        <div class="tripleCart">
            <div class="reboxZane">${this.item.name}</div>
            <div class="yellowStars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></div>
            <div class="inCartQuantity">${this.item.amount} x ${this.item.price}</div>
        </div>
        <button class="closeButton" name="remove" style="background-color: white; border: none;" data-id="${this.item.id}">X</button>
        </div>
        <hr> 
        </div>

            `
    }
}