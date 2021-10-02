
var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankinge2a5f142aa60feefbd3f2e8e546de2c3a1e9172c2fe09ff2";

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);
/*
    .then((response) => {
        if (response.ok) {
            response.json().then((json) => {
                console.log(json.data);
                let coinsData = json.data.coins;

                if (coinsData.length > 0) {
                    var cryptoCoin = "";
                }
                //For Loop Starts
                coinsData.forEach((coin) => {
                    cryptoCoin += "<tr>";
                    cryptoCoin += `<td> ${coin.uuid} </td>`;
                    cryptoCoin += `<td> ${coin.btcPrice} </td>`;
                    cryptoCoin += `<td> ${coin.rank}</td>`;
                    cryptoCoin += `<td> ${coin.tier} </td>`;
                    cryptoCoin += `<td> ${coin.name}</td>`;
                    cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
                    cryptoCoin += `<td> ${coin.symbol}</td>`; "<tr>";
                });
                //For Loop Ends
                document.getElementById("crypto").innerHTML = cryptoCoin;
            });
        }
    })
    .catch((error) => {
        console.log(error);
    });

*/

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('textcrypto').onkeyup = function () {

        // Send a GET request to the URL

        fetch(`${proxyUrl}${baseUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${apiKey}`,
                'Access-Control-Allow-Origin': "*"
            }
        })
            // Put response into json form
            .then(response => response.json())
            .then(json => {
                // Get currency from user input and convert to upper case
                let crypto = document.getElementById('textcrypto').value.toUpperCase();
                console.log(json.data.coins);
                const rate = json.data.coins;
                
                function checkAge(age) {
                    return age.symbol === crypto;
                }
                
                const found = rate.find(checkAge);
                
                if (found !== undefined) {
                    // Display exchange on the screen
                    document.getElementById('resultcrypto').innerHTML = `1 ${found.name} equals ${found.price} USD`;
                   /* var img = document.createElement('img');
                    img.src =
                        `${found.iconUrl}`;
                    img.width = 50;
                    img.height = 50;
                    document.getElementById('icon').appendChild(img);*/
                    const image = document.getElementById("kep");
                    image.style.visibility = "visible";
                    image.src = `${found.iconUrl}`;
                    image.width = image.height = 100;
                }
                else {
                    // Display error on the screen
                    document.getElementById('resultcrypto').innerHTML = 'Invalid Currency.';
                    const image = document.getElementById("kep");
                    image.style.visibility = "hidden";
                   
                }
            })
            // Catch any errors and log them to the console
            .catch(error => {
                console.log('Error:', error);
            });

    }
});