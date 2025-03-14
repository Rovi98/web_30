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

document.addEventListener('DOMContentLoaded', function() {
    const floatingWindow = document.getElementById('floatingWindow');
    floatingWindow.style.display = 'block'; // Set display to block first
    setTimeout(() => {
        floatingWindow.classList.add('show'); // Then add the show class for fade effect
    }, 10); // Small timeout to allow the display change to take effect
});

document.getElementById('infoButton').addEventListener('click', function() {
    const floatingWindow = document.getElementById('floatingWindow');
    floatingWindow.style.display = 'block'; // Show the floating window
    setTimeout(() => {
        floatingWindow.classList.add('show'); // Add the show class for fade effect
    }, 10); // Small timeout to allow the display change to take effect
});


document.getElementById('closeButton').addEventListener('click', function() {
    const floatingWindow = document.getElementById('floatingWindow');
    floatingWindow.classList.remove('show'); // Hide with fade effect
    setTimeout(() => {
        floatingWindow.style.display = 'none'; // Set display to none after fade out
    }, 500); // Match the timeout with the CSS transition duration
});
