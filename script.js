function redirectToPage(page) {
    window.location.href = page;
}

document.getElementById('validateButton').onclick = function() {
    if (this.classList.contains('disabled')) return; // Prevent action if disabled

    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const errorMessage = document.getElementById('errorMessage');

    if (input1 === '2' && input2 === '7' && input3 === '7' && input4 === '5') {
        redirectToPage('success.html');
    } else {
        errorMessage.textContent = 'Codi incorrecte, hi ha alguna pista que no ho heu fet del tot bé!';
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

// Function to enable Pista buttons based on the current date
function enablePistaButtons() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    
    // Define the dates for each Pista button
    const pistaDates = [
        new Date(year, 2, 18), // Pista nº 1: 18/3
        new Date(year, 2, 19), // Pista nº 2: 19/3
        new Date(year, 2, 20), // Pista nº 3: 20/3
        new Date(year, 2, 21)  // Pista nº 4: 21/3
    ];

    // Get all Pista buttons
    const buttons = document.querySelectorAll('.buttons button');

    // Enable buttons based on the current date
    buttons.forEach((button, index) => {
        if (currentDate >= pistaDates[index]) {
            button.disabled = false;
            document.getElementById(`input${index + 1}`).disabled = false; // Enable corresponding input field
        }
    });

    // Enable the validate button if the last button is enabled
    if (currentDate >= pistaDates[3]) {
        document.getElementById('validateButton').classList.remove('disabled');
    }
}

// Call the function when the page loads
window.onload = function() {
    enablePistaButtons();
};
