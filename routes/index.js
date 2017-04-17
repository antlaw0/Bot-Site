var express = require('express');
var router = express.Router();
var Twit = require('twit');
var request = require('request');

var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});



router.post('/postTweet', function(req, res, next){
bot.tweet(req.body);

});//end of post
module.exports = router;