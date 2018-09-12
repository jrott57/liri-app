

require("dotenv").config();
const Twitter = require('twitter');
const keys = require ("./keys.js");
const fs = require ("fs");
const Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);


var tweetInput = process.argv[2];
var spotifyInput = process.argv[3];

function myTweets() {
var params = {screen_name: 'jrott57'};
twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
    
  }      
});
}
myTweets();


function spotifyThisSong() {
    spotify.search({ type: 'track', query: 'my way' }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        
        } 
    })
        
     
        // Do something with 'data' 
    };


spotifyThisSong();


function runThis(tweetInput,spotifyInput) {

switch(tweetInput){
    
    case 'my-tweets':
    myTweets();
    break;

    case 'spotify':
    spotifyThisSong(spotifyInput);
    break;
}

}
