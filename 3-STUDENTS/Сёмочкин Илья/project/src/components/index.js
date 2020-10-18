import cart from './cart.js'
import catalog from './catalog.js'
import catalogMan from './catalog-man.js'


export default () => {
    cart.init();
    catalog.init(cart);
    catalogMan.init(cart);
}