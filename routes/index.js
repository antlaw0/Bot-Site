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

//get homepage
router.get('/', function(req, res, next){
  res.render('index', { title: "Frank/'s Page" });
});



router.post('/postTweet', function(req, res, next){
console.log("Bot tweeted:"+ req.body.text);
Bot.tweet(req.body.text);
res.redirect("/");
});//end of post
module.exports = router;