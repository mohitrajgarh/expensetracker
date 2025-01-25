const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('ExpenseList');

expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Corrected capitalization of "value" (it should be lowercase)
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    // Corrected the condition and checked for valid inputs
    if (description && category && !isNaN(amount) && amount > 0) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${description}</td>
            <td>${category}</td>
            <td>${amount}</td>
        `;

        expenseList.appendChild(newRow);

        // Reset input fields after adding a new expense
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert("Please fill out all fields with valid data.");
    }
});
