document.getElementById('calculate').addEventListener('click', function() {
  const amount = parseFloat(document.getElementById('amount').value);
  const tax = amount * 0.05;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<p>5% Tax: ${tax.toFixed(2)} AED</p>`;
});
