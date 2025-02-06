var header = document.querySelector(".header-title");
var headerBackground = document.querySelector(".l-header");

function changeColorHeader() {
  header.classList.toggle("is-active");
  headerBackground.classList.toggle("is-active");
}

headerBackground.addEventListener("click", changeColorHeader);

var productOnions = document.querySelector(".product-onions");

function changeProductOnions() {
  productOnions.classList.toggle("is-active");
}

productOnions.addEventListener("click", changeProductOnions);

var productClassic = document.querySelector(".product-classic");

function changeProductClassic() {
  productClassic.classList.toggle("is-active");
}

productClassic.addEventListener("click", changeProductClassic);

var productAll = document.querySelectorAll(".product");
var productText = document.querySelector(".product-text-hidden");

function changeProductText() {
  productText.classList.toggle("is-active");
}

productAll, addEventListener("click", changeProductText);
