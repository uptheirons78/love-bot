const Twit = require('twit');
const config = require('./config');
const Bot = new Twit(config);
const helper = require('./helpers');

function postTweet() {
    //1. create a tweet
    const tweet = helper.funSerialSentence();
    //2. post it on Twitter
    Bot.post('statuses/update', tweet, handler);

    function handler(err, data, response) {
        if(!err) {
            console.log(data);
        } else {
            console.log(err);
        }
    }
}

postTweet(); // run it as soon as the program start
setInterval(postTweet, 1000 * 60 * 60 * 24); //then once a day
