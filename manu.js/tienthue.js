document.getElementById('taxForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn gửi biểu mẫu

    // Lấy giá trị từ biểu mẫu
    const name = document.getElementById('name').value;
    const totalIncome = parseFloat(document.getElementById('income').value);
    const dependents = parseInt(document.getElementById('dependents').value);

    // Tính thu nhập chịu thuế
    const taxableIncome = totalIncome - 4 - (dependents * 1.6);

    // Tính thuế suất
    let taxRate = 0;

    if (taxableIncome <= 60) {
        taxRate = 0.05;
    } else if (taxableIncome <= 120) {
        taxRate = 0.10;
    } else if (taxableIncome <= 210) {
        taxRate = 0.15;
    } else if (taxableIncome <= 384) {
        taxRate = 0.20;
    } else if (taxableIncome <= 624) {
        taxRate = 0.25;
    } else if (taxableIncome <= 960) {
        taxRate = 0.30;
    } else {
        taxRate = 0.35;
    }

    // Tính thuế phải trả
    const taxPayable = taxableIncome * taxRate;

    // Hiển thị kết quả
    document.getElementById('result').innerText = `${name}, thuế phải trả là: ${taxPayable.toFixed(2)} triệu đồng.`;
});