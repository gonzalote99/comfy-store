function displayPageTitle(productName) {
document.title = `${productName.toUpperCase()} | comfy`;

const currentPageContainer = document.querySelector('.breadcrumb__current-page');

if(currentPageContainer) {
  currentPageContainer.textContent = productName;
  return;
}




}

export default displayPageTitle;