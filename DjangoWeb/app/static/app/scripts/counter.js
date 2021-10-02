// Check if there is already a vlaue in local storage
if (!localStorage.getItem('counter')) {

    // If not, set the counter to 0 in local storage
    localStorage.setItem('counter', 0);
}

function count() {
    // Retrieve counter value from local storage
    let counter = localStorage.getItem('counter');

    // update counter
    counter++;
    document.getElementById('asd').innerHTML = counter;

    // Store counter in local storage
    localStorage.setItem('counter', counter);
}

document.addEventListener('DOMContentLoaded', function () {
    // Set heading to the current value inside local storage
    document.getElementById('asd').innerHTML = localStorage.getItem('counter');
    document.getElementById('asd2').onclick = count;
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        const name = document.getElementById('name').value;
        alert(`Hello, ${name}`);
    };
});