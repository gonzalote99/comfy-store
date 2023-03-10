import displayPageTitle from './page-title';
import displayFilteredProducts from './filtered-products';
import addItemToCart from './add-item-to-cart';
import {
productsSearchInput,
productsPriceCurrentInput,
productsPriceRangeInput,
companyBtnsContainer,
productsContainer,

} from './elements';


function displayProductsPage(products) {
  let productsList = [...products];

  displayPageTitle('Products');
  displayCompanies(products);

  productsSearchInput.addEventListener('keyup', () => {
    const value = productsSearchInput.value;

    const filteredProducts = productsList.filter((product) => {
      const {name} = product.fields;

      return name.includes(value);
    });

    productsContainer.innerHTML = displayFilteredProducts(filteredProducts);

    const productAddBtns = document.querySelectorAll('.product__add-btn');

    productAddBtns.forEach((btn)  => {
      btn.addEventListener('click', (e) => {
        addItemToCart(products, e.currentTarget);
      } );
    });

  } );



  productsPriceCurrentInput.textContent = `value: $${productsPriceRangeInput.value}`;

  const prieceList = productsList.map((product) => {
  const {price} = product.fields;

  return price;
  });

  const maxPrice = Math.max(...prieceList);

  productsPriceRangeInput.max = Math.ceil(maxPrice / 100);

  productsPriceRangeInput.addEventListener('change', () => {
    const priceRangeValue = productsPriceRangeInput.value;

    productsPriceCurrentInput.textContent = `value: $${priceRangeValue}`;

    const filteredProducts = productsList.filter((product) => {
      const {price} = product.fields;

      return price / 100 <= priceRangeValue;
    });


    productsContainer.innerHTML = displayFilteredProducts(filteredProducts);

    const productsAddBtns = document.querySelectorAll('.product__add-btn');
   

    productsAddBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        addItemToCart(products, e.currentTarget);
      });
    });



  });


  productsContainer.innerHTML = displayFilteredProducts(productsList);

  const productsAddBtns = document.querySelectorAll('.product__add-btn');


  productsAddBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      addItemToCart(products, e.currentTarget);
    });
  });
}


function displayCompanies(products) {
 const companies = [
   ... new Set(
     products.map((product) => {
       const {company} = product.fields;
       return company;
     })
   ),
 ];


 const displayCompanies = companies
 .map((company) => {
   return `<button class="company__btn" data-company="${company}">${company}></button> `;

 }).join('');


 companyBtnsContainer.innerHTML = `<button class="company__btn" data-company="all">all</button>${displayCompanies}`;


 const companyBtns = document.querySelectorAll('.company__btn');

 companyBtns.forEach((btn) => {
   btn.addEventListener('click', (e) => {
     let filteredProdcts = products;
     const btnCompany = e.currentTarget.dataset['company'];


     if(btnCompany == 'all') {
       productsContainer.innerHTML = displayFilteredProducts(filteredProdcts);
       return;
     }

     filteredProdcts = products.filter((product) => {
     const {company: productCompany} = product.fields;
      
     return btnCompany = productCompany;

     });

     productsContainer.innerHTML = displayFilteredProducts(filteredProdcts);

     const productAddBtns = document.querySelectorAll('.product__add-btn') 

     productAddBtns.forEach((btn) => {
       btn.addEventListener('click', (e) => {
         addItemToCart(products , e.currentTarget);
       });
     });
   });
 });



}

export default displayProductsPage;