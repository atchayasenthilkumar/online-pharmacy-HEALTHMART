// Array to hold cart items
let cart = [];

// Get references to elements
const cartCount = document.getElementById("cart-count");
const products = document.querySelectorAll(".product");
const checkoutBtn = document.getElementById("checkout-btn");

// Event listener to add products to cart
products.forEach(product => {
  const addToCartBtn = product.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", () => {
    const productId = product.getAttribute("data-id");
    const productName = product.querySelector("h3").textContent;
    const productPrice = product.querySelector("p").textContent.split(": $")[1];

    addToCart(productId, productName, productPrice);
  });
});

// Function to add product to the cart
function addToCart(id, name, price) {
  const existingProductIndex = cart.findIndex(item => item.id === id);
  if (existingProductIndex === -1) {
    cart.push({ id, name, price, quantity: 1 });
  } else {
    cart[existingProductIndex].quantity += 1;
  }

  updateCartCount();
}

// Function to update cart count
function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Event listener for checkout button
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    // For simplicity, just log the cart items
    alert("Proceeding to checkout...");
    console.log(cart);
  }
});
