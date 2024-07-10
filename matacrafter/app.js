// JavaScript variables to hold the values
let value1 = 'No value set';
let value2 = 'No value set';

// Function to set Value 1
function setValue1() {
    // Get the value from the input field
    const inputValue1 = document.getElementById('value1Input').value;

    // Set the value to the value1 variable
    value1 = inputValue1;

    // Store the value in localStorage
    localStorage.setItem('value1', value1);

    alert('First value stored');
}

// Function to set Value 2
function setValue2() {
    // Get the value from the input field
    const inputValue2 = document.getElementById('value2Input').value;

    // Set the value to the value2 variable
    value2 = inputValue2;

    // Store the value in localStorage
    localStorage.setItem('value2', value2);

  alert('second value stored');
}

// Function to get both values
function getValues() {
    // Retrieve the values from localStorage
    value1 = localStorage.getItem('value1') || 'No value set';
    value2 = localStorage.getItem('value2') || 'No value set';

    // Update the displayed values
    document.getElementById('value1').textContent = value1;
    document.getElementById('value2').textContent = value2;
}

// Initialize stored values from localStorage when the page loads
window.addEventListener('load', () => {
    // Retrieve the values from localStorage
    value1 = localStorage.getItem('value1') || 'No value set';
    value2 = localStorage.getItem('value2') || 'No value set';

    // Update the displayed values
    document.getElementById('value1').textContent = value1;
    document.getElementById('value2').textContent = value2;
});
