let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

document.getElementById("cart-btn").addEventListener("click", () => {
  showCart();
});

function showCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("total-price").innerText = total.toFixed(2);
  document.getElementById("cart-modal").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}
