


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('textinput').onkeyup = function () {

        // Send a GET request to the URL
        fetch('http://data.fixer.io/api/latest?access_key=fe44259592a9b3952f9ea5b6e6af07c8&format=1')
            // Put response into json form
            .then(response => response.json())
            .then(data => {
                // Get currency from user input and convert to upper case
                let currency = document.getElementById('textinput').value.toUpperCase();

                console.log(currency);

                const rate = data.rates[currency];
                console.log(rate);
                if (rate !== undefined) {
                    // Display exchange on the screen
                    document.getElementById('resultcurr').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}.`;
                }
                else {
                    // Display error on the screen
                    document.getElementById('resultcurr').innerHTML = 'Invalid Currency.';
                }
            })
            // Catch any errors and log them to the console
            .catch(error => {
                console.log('Error:', error);
            });
        
    }
});