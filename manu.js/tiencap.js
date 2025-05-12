document.getElementById('customerType').addEventListener('change', function () {
    const customerType = this.value;
    const connectionDiv = document.getElementById('connectionDiv');

    if (customerType === 'business') {
        connectionDiv.style.display = 'block';
    } else {
        connectionDiv.style.display = 'none';
        document.getElementById('connections').value = 1; // Reset to 1 for residential
    }
});

document.getElementById('billingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const customerId = document.getElementById('customerId').value;
    const customerType = document.getElementById('customerType').value;
    const connections = parseInt(document.getElementById('connections').value);
    const premiumChannels = parseInt(document.getElementById('premiumChannels').value);

    let totalBill = 0;

    if (customerType === 'residential') {
        totalBill = 4.5 + 20.5 + (premiumChannels * 7.5);
    } else if (customerType === 'business') {
        totalBill = 15 + 75 + Math.max(0, connections - 10) * 5 + (premiumChannels * 50);
    }

    document.getElementById('result').innerText = `Hóa đơn cho khách hàng ${customerId}: $${totalBill.toFixed(2)}`;
});