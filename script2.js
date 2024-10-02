// Function to change the main product image when a thumbnail is clicked
function changeImage(src) {
    document.getElementById('productImage').src = src;
}

// Function to increase the quantity
function increaseQuantity() {
    let quantityElement = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
}

// Function to decrease the quantity
function decreaseQuantity() {
    let quantityElement = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
    }
}

// Function to add the product to the cart
function addToCart(company, product, price, image) {
    let quantity = parseInt(document.getElementById('quantity').textContent);

    // Get the cart from localStorage or create a new one if not available
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    let existingProductIndex = cart.findIndex(item => item.product === product && item.company === company);

    if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the quantity
        cart[existingProductIndex].quantity += quantity;
    } else {
        // If not, add the product to the cart
        cart.push({
            company: company,
            product: product,
            price: price,
            quantity: quantity,
            image: image
        });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notify the user
    alert(`${product} has been added to your cart!`);
}
