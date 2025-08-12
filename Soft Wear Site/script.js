let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = cart.reduce((sum, item) => sum + item.price, 0);

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to localStorage
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalElement = document.getElementById('total');
    
    if (cartItems) {
        cartItems.innerHTML = '';
        cart.forEach(cartItem => {
            const li = document.createElement('li');
            li.textContent = `${cartItem.item} - R${cartItem.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });
    }
    
    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    if (totalElement) {
        totalElement.textContent = `Total: R${total.toFixed(2)}`;
    }
}

function checkout() {
    alert(`Thank you for your purchase! Total: R${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
    localStorage.removeItem('cart');  // Clear cart from localStorage
}

document.addEventListener('DOMContentLoaded', updateCart);

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show-menu');
}
