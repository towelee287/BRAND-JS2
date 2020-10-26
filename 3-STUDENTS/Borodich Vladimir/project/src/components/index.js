import Basket from './basket.js';
import Catalog from './catalog.js';
import MainMenu from './main-menu.js';
import FooterMenu from './footer-menu.js';

export default () => {    
    const catalog = new Catalog('#prod', 'catalog/prod.json');
    const basket = new Basket('#basket');
    new MainMenu();
    new FooterMenu();

}