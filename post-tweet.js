console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var tweet = { 
status: 'hello world!!' }

T.post('statuses/update', tweet, tweeted)

 function tweeted(err, data, response) {
  if(err){
console.log("Something went wrong!");
}
else{
console.log("Voila It worked!");
}
}
