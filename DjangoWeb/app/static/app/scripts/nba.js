
var baseUrl = 'https://free-nba.p.rapidapi.com/players';
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = '13ca47619cmsh8f2d6906e1082aap1d7fb1jsn490053f6ea8f';

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


    // Send a GET request to the URL
    /*

    fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "x-rapidapi-key": "13ca47619cmsh8f2d6906e1082aap1d7fb1jsn490053f6ea8f"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

        })

        .catch(err => {
            console.error(err);
        });*/

    fetch("https://google-translate20.p.rapidapi.com/translate", {
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "x-rapidapi-host": "google-translate20.p.rapidapi.com",
            "x-rapidapi-key": "13ca47619cmsh8f2d6906e1082aap1d7fb1jsn490053f6ea8f"
        },
        "body": {
            "text": "The POST method has several advantages over GET: it is more secure because most of the request is hidden from the user; Suitable for big data operations.",
            "tl": "es",
            "sl": "en"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

        })
        .catch(err => {
            console.error(err);
        });
});


            