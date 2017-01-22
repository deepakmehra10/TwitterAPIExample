console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var params = { 
q: 'akshay',
 count: 100 
}

T.get('search/tweets', params,searchedData);

 function searchedData(err, data, response) {
  console.log(data);
}
