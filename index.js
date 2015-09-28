var Twitter = require('twitter');

// module.exports = function() {

var client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

client.get('search/tweets', {
	q: '#nodejs',
	result_type: 'recent',
	count: 50
}, function(err, tweets, resp) {
	var len = tweets.statuses.length;
	console.log(tweets.statuses[Math.floor(Math.random()*len)].text);
});

// };
