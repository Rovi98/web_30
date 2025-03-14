document.getElementById('validateButton').addEventListener('click', function() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;

    const inputs = [input1, input2, input3, input4];
    const validNumbers = ['1', '2', '3', '4']; // Define valid numbers

    // Check if all inputs are valid numbers and match the required numbers
    const isValid = inputs.every(input => validNumbers.includes(input));

    const errorMessage = document.getElementById('errorMessage');
    if (!isValid) {
        errorMessage.textContent = "Contrasenya incorrecta!"; // Error message in Catalan
    } else {
        errorMessage.textContent = "";
        window.location.href = "success.html"; // Redirect to a new page
    }
});

function redirectToPage(page) {
    window.location.href = page;
}