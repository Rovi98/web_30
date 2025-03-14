function redirectToPage(page) {
    window.location.href = page;
}

document.getElementById('validateButton').onclick = function() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const errorMessage = document.getElementById('errorMessage');

    if (input1 === '1' && input2 === '2' && input3 === '3' && input4 === '4') {
        redirectToPage('success.html');
    } else {
        errorMessage.textContent = 'Incorrect code. Please try again.';
    }
};
