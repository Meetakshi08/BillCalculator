const amount = document.getElementById('amount');
const percentage = document.getElementById('percentage');
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', () => {
    if (amount.value == 0) {
        alert('Please enter the bill amount');
    } else if (percentage.value == 0) {
        alert('Please enter the tip percentage');
    } else {
        const billAmount = parseFloat(amount.value);
        const tipPercentage = parseFloat(percentage.value);
        const total = billAmount + (billAmount * (tipPercentage / 100));
        document.querySelector('h1:last-of-type').textContent = `Total: $${total.toFixed(2)}`;
    }
});
