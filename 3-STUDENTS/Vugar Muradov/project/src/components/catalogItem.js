export default class CatalogItem {
    constructor(item) {
        this.item = item;
    }
    render() {
      return `
        <article>
        <a style="cursor: pointer">
        <img src="${this.item.img}" alt="item">
        <h6>${this.item.name}</h6>
        <button class="buyButton" name="add" data-name="${this.item.name}" data-img="${this.item.img}" data-price="${this.item.price}" data-id="${this.item.id}"> Add to Cart </button>
        <p class="price">${this.item.price}</p></a>
        </article>
      `
    }
}