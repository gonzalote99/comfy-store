import toggleMenuDisplay from './toggle-menu-display';
import toggleCartDisplay from './toggle-cart-display';
import fetchProducts from './fetch-products';
import displayFeaturedProducts from './featured-products';
import displayProductsPage from './products-page';
import displayProduct from './display-product';
import displayCartItems from './display-cart-items';
import displayPageTitle from './page-title';
import {currentPage} from './elements';


initializeComfy();


async function initializeComfy() {
  toggleMenuDisplay();
  toggleCartDisplay();
  displayCartItems();


  const products = await fetchProducts();

  if(currentPage === './index.html') {
    displayFeaturedProducts(products)
  }

  if(currentPage === './products.html') {
    displayProductsPage(products)
  }

  if (currentPage === './product.html') {
    displayProduct(products)
  }

  if (currentPage === './about.html') {
    displayPageTitle('About')
  }
}
