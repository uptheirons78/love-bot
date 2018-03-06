const Twit = require('twit');
const config = require('./config');
const Bot = new Twit(config);
const helper = require('./helpers');
const schedule = require('node-schedule');


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

const dailySchedule = schedule.scheduleJob('42 15 * * *', postTweet());
