var baseUrl = "https://api.the-odds-api.com/v4/sports";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "b5cb8cc02ca7bf2e0105b23e964a477b";

const regions = 'us'; // uk | us | eu | au. Multiple can be specified if comma delimited

const markets = 'h2h'; // h2h | spreads | totals. Multiple can be specified if comma delimited

const oddsFormat = 'decimal';// decimal | american

const dateFormat = 'iso'; // iso | unix

 // Find the scoreboard div in our html

var tableHeaders = ["Sport", "Sport Key", "Home", "Away", "Date"];




document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {

        // Send a GET request to the URL

        fetch(`${proxyUrl}${baseUrl}` + "/?" + new URLSearchParams({
            'api_key': "b5cb8cc02ca7bf2e0105b23e964a477b"

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
                            
                          /*  var div = document.getElementById("matches");
                            while (div.firstChild) {
                                div.removeChild(div.firstChild);
                            }*/

                            createScoreboardTable();
                            data.forEach((match) => {
                                console.log(match);

                                /*var completelist = document.createElement('ul');

                                completelist.innerHTML += `<li> ${match.home_team} vs ${match.away_team}</li>`;

                                div.appendChild(completelist);*/
                                appendScores(match);

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



const createScoreboardTable = () => {
    var tableDiv = document.getElementById("scoreboard");
    while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.firstChild);
            
    }

     //   while (tableDiv.firstChild) tableDiv.removeChild(tableDiv.firstChild) // Remove all children from scoreboard div (if any)
        let scoreboardTable = document.createElement('table') // Create the table itself
        scoreboardTable.className = 'scoreboardTable'
        let scoreboardTableHead = document.createElement('thead') // Creates the table header group element
        scoreboardTableHead.className = 'scoreboardTableHead'
        let scoreboardTableHeaderRow = document.createElement('tr') // Creates the row that will contain the headers
        scoreboardTableHeaderRow.className = 'scoreboardTableHeaderRow'
        // Will iterate over all the strings in the tableHeader array and will append the header cells to the table header row
        tableHeaders.forEach(header => {
            let scoreHeader = document.createElement('th') // Creates the current header cell during a specific iteration
            scoreHeader.innerText = header
            scoreboardTableHeaderRow.append(scoreHeader) // Appends the current header cell to the header row
        })
        scoreboardTableHead.append(scoreboardTableHeaderRow) // Appends the header row to the table header group element
        scoreboardTable.append(scoreboardTableHead)
        let scoreboardTableBody = document.createElement('tbody') // Creates the table body group element
        scoreboardTableBody.className = "scoreboardTable-Body"
        scoreboardTable.append(scoreboardTableBody) // Appends the table body group element to the table
        console.log(scoreboardTable);
    // tableDiv.append(scoreboardTable) // Appends the table to the scoreboard div4
    tableDiv.append(scoreboardTable);
    }
    // The function below will accept a single score and its index to create the global ranking
    const appendScores = (singleScore) => {
        const scoreboardTable = document.querySelector('.scoreboardTable') // Find the table we created
        let scoreboardTableBodyRow = document.createElement('tr') // Create the current table row
        scoreboardTableBodyRow.className = 'scoreboardTableBodyRow'
        // Lines 72-85 create the 5 column cells that will be appended to the current table row
        let scoreRanking = document.createElement('td')
        scoreRanking.innerText = singleScore.sport_title;
        let usernameData = document.createElement('td')
        usernameData.innerText = singleScore.sport_key;
        let scoreData = document.createElement('td')
        scoreData.innerText = singleScore.home_team;
        let timeData = document.createElement('td')
        timeData.innerText = singleScore.away_team;
        let accuracyData = document.createElement('td')
        accuracyData.innerText = singleScore.commence_time;
        scoreboardTableBodyRow.append(scoreRanking, usernameData, scoreData, timeData, accuracyData) // Append all 5 cells to the table row
        scoreboardTable.append(scoreboardTableBodyRow) // Append the current row to the scoreboard table body
    }

