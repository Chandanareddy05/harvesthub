document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const totalPriceElement = document.querySelector('.total-price');

    // Update total price based on quantity change
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotalPrice);
    });

    function updateTotalPrice() {
        let total = 0;
        quantityInputs.forEach(input => {
            const price = parseFloat(input.closest('.cart-item').querySelector('.price').textContent.replace('Price: $', ''));
            const quantity = parseInt(input.value);
            total += price * quantity;
        });
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }
});
