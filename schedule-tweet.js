console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);


setInterval(tweetScheduler,1000*20);
tweetScheduler();
function tweetScheduler(){
var randomNumber = Math.floor(Math.random()*1000);
var tweet = { 
status: randomNumber+'#hiii!!' }

T.post('statuses/update', tweet, tweeted)

 function tweeted(err, data, response) {
  if(err){
console.log("Something went wrong!");
}
else{
console.log("Voila It worked!");
}
}
}
