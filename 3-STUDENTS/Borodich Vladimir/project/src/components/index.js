import Basket from './products/basket.js';
import Catalog from './products/catalog.js';
import MainNavigation from './navigation/main.js';
import FooterNavigation from './navigation/footer.js';

export default () => {    
    const catalog = new Catalog('#prod', 'catalog/prod.json');
    const basket = new Basket('#basket');
    new MainNavigation();
    new FooterNavigation();

}