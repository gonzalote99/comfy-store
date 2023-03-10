import displayPageTitle from './page-title';
import displayFilteredProducts from './filtered-products';
import addItemToCart from './add-item-to-cart';
import {featuredProductsContainer} from './elements';


function displayFeaturedProducts(products) {
const featuredProducts = products.filter((product) => {
  const {featured } = product.fields;
  return featured;
});

displayPageTitle('Home');

featuredProductsContainer.innerHTML = 
displayFilteredProducts(featuredProducts);


const productAddBtns = document.querySelectorAll('.product__add-btn');

productAddBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    addItemToCart(products, e.currentTarget);
  });
});



}



export default displayFeaturedProducts;