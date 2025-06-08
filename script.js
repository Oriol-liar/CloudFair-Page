const cart = {
    items: [],
    add(product, price) {
        this.items.push({product, price: Number(price)});
        this.updateDisplay();
    },
    updateDisplay() {
        const display = document.getElementById('carrito-items');
        const count = this.items.length;
        display.textContent = `${count} ${count === 1 ? 'art\u00edculo' : 'art\u00edculos'}`;
    }
};

document.querySelectorAll('.btnAgregar').forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.dataset.producto;
        const price = btn.dataset.precio;
        cart.add(product, price);
    });
});
