let products = [];
let cart = [];
console.log(cart);
//* Fetching Products from the Api*//
fetch("https://ancient-dawn-92955.herokuapp.com/get_products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    products = data;
    showproducts(products);
  });

//* Show-Products Button*//
function showproducts(products) {
  let product_container = document.querySelector("#products-container");
  product_container.innerHTML = "";
  products.data.forEach((product) => {
    product_container.innerHTML += `
    <div class = "products" ">
        <img src="${product.images}" class = "product-images">
        <div class= "product-content">
        <h4 class = "product-title"> ${product.product_name}</h4>
        <p class = "product-description"> ${product.description}</p>
        <p class = "product-price">R${product.price} </p>
        <button onclick="addToCart(${product.id})"> Add to cart</button>
        </div>
    </div>

    `;
  });
}
//* Add to cart functions*//
function addToCart(id) {
  let product = products.data.find((item) => {
    return (item.id = id);
  });
  console.log(product);
  cart.push(product);
  console.log("See Cart Items Here: ", cart);
}

//* Search Button *//
function searchForProducts() {
  let searchTerm = document.querySelector("#searchTerm").value;
  console.log(searchTerm);

  let searchedProducts = products.data.filter((products) =>
    products.product_name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  console.log(searchedProducts);

  if (searchedProducts.length == 0) {
    document.querySelector("#products-container").innerHTML =
      "<h2>Opps! No results found<h2>";
  } else {
    showproducts(searchedProducts);
  }
}

function sortNameAsc() {
  let sortedProducts = products.sort((a, b) => {
    if (a.product_name > b.id) return 1;
    if (a.product_name < b.id) return -1;
    return 0;
  });
  showproducts(sortedProducts);
}

function sortNameDesc() {
  let sortedProducts = products.sort((a, b) => {
    if (a.product_name > b.id) return 1;
    if (a.product_name < b.id) return -1;
    return 0;
  });
  sortedProducts.reverse();
  showproducts(sortedProducts);
}
