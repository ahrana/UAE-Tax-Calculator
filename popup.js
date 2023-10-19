document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener('click', calculateTax);
});

function calculateTax() {
    const amount = parseFloat(document.getElementById('amount').value);
    const tax = (amount * 0.05).toFixed(2);
    document.getElementById('taxAmount').textContent = tax;
}
