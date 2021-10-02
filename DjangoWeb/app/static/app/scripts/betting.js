var baseUrl = "https://api.the-odds-api.com/v4/sports";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "b5cb8cc02ca7bf2e0105b23e964a477b";

const regions = 'us' // uk | us | eu | au. Multiple can be specified if comma delimited

const markets = 'h2h' // h2h | spreads | totals. Multiple can be specified if comma delimited

const oddsFormat = 'decimal' // decimal | american

const dateFormat = 'iso' // iso | unix




document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {

        // Send a GET request to the URL

        fetch(`${proxyUrl}${baseUrl}`+ "/?" +new URLSearchParams({
            'api_key':"b5cb8cc02ca7bf2e0105b23e964a477b"
           
        }))
            // Put response into json form
            .then(response => response.json())
            .then(data => {
                // Get currency from user input and convert to upper case
                let crypto = document.getElementById('textbetting').value;
                console.log(data);
               

                function checkTitle(league) {
                    return league.title === crypto;
                }

                const found = data.find(checkTitle);

                if (found !== undefined) {
                    // Display exchange on the screen
                    document.getElementById('resultbetting').innerHTML = ` ${found.description}`;
                    fetch(`${proxyUrl}` + "https://api.the-odds-api.com/v4/sports/" + `${found.key}` + "/odds" + "/?" + new URLSearchParams({
                        'api_key': "b5cb8cc02ca7bf2e0105b23e964a477b",
                        'regions': 'us',
                        'markets': 'h2h'


                    }))
                        .then(response => response.json())
                        .then(data => {
                            var div = document.getElementById("matches");
                            while (div.firstChild) {
                                div.removeChild(div.firstChild);
                            }
                            data.forEach((match) => {
                               
                                var completelist = document.createElement('ul');

                                completelist.innerHTML += `<li> ${match.home_team} vs ${match.away_team}</li>`;
                               
                                div.appendChild(completelist);
                                
                            });


                        });
                            

                         
                        }
                            

                        
                            
                
                else {
                    // Display error on the screen
                    document.getElementById('resultbetting').innerHTML = 'Invalid Currency.';
                   

                }
            

               
            })
            // Catch any errors and log them to the console
            .catch(error => {
                console.log('Error:', error);
            });

        return false;

    }
});