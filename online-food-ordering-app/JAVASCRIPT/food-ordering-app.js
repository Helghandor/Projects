let cart = [];

// Add a dish to the cart and update the count
function addToCart(dishName) {
  cart.push(dishName);
  updateCartCount();
}

// Update the cart count in the Items button
function updateCartCount() {
  var cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = cart.length;
  }
}

// Wait until the page is fully loaded
window.onload = function() {
  // Login form redirect (if present)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.onsubmit = function(event) {
      event.preventDefault();
      window.location.href = 'menu.html';
    }
  }

  // Set up event listeners for all Add buttons
  var addButtons = document.querySelectorAll('.add-to-cart-btn');
  addButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var dishName = this.getAttribute('data-dish');
      addToCart(dishName);
    });
  });

  // Show the correct cart count on page load
  updateCartCount();

}