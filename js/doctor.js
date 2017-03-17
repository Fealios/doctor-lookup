var apiKey = require("./../.env").apiKey;

function Search (search){
    this.doctorList = [];
    this.location;
    this.url = "https://api.betterdoctor.com/2016-03-01/doctors?query="+ search + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=full-name-asc&skip=0&limit=10&user_key=a3afcbccb6a136ce11154fc8dfaf11e8"
}


exports.Search = Search
