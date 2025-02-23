function saveProducts(products) {
  localStorage.setItem('products', JSON.stringify(products));
}

function loadProducts() {
  return JSON.parse(localStorage.getItem('products')) || [];
}

let products = loadProducts();
products.push({ name: "Новый товар", price: 100 });
saveProducts(products);
