exports.commands = [
    "date_fact",
    "year_fact",
    "joke",
	"person",
	"yesno",
	"cat_fact",
	"jibberish",
    "math_fact"
]

exports.math_fact = {
        usage: "<random math>",
        description: "Gives a Random Math Fact",
        process: function(bot, msg, suffix) {
            require("request")("http://numbersapi.com/random/math?json",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.text) {
                        msg.channel.send(data.text)
                    }
                });
        }
    },

    exports.year_fact = {
        description: "Gives a Random Year Fact",
        process: function(bot, msg, suffix) {
            require("request")("http://numbersapi.com/random/year?json",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.text) {
                        msg.channel.send(data.text)
                    }
                });
        }
    },

    exports.joke = {
        description: "Gives a Random Joke",
        process: function(bot, msg, suffix) {
            require("request")("https://icanhazdadjoke.com/slack",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.attachments[0].text) {
                        msg.channel.send(data.attachments[0].text)
                    }
                });
        }
    },
	
	exports.person = {
        description: "Creates a Random Person",
        process: function(bot, msg, suffix) {
            require("request")("https://randomuser.me/api/",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.results[0].name.first) {
                        msg.channel.send(data.results[0].name.first + ' ' + data.results[0].name.last + ' aka ' + data.results[0].login.username)
                    }
                });
        }
    },	

	exports.cat_fact = {
        description: "Random Cat Fact",
        process: function(bot, msg, suffix) {
			require("request")("https://catfact.ninja/fact",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.fact) {
                        msg.channel.send(data.fact)
                    }
                });
        }
    },	
	
	exports.yesno = {
        description: "Tells you yes or no.",
        process: function(bot, msg, suffix) {
            require("request")("https://yesno.wtf/api/",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.answer) {
						var answer = data.answer.charAt(0).toUpperCase() + data.answer.slice(1);
						if(suffix){
							msg.channel.send('You asked: "' + suffix + '"\nThe answer is:"' + answer + '!"\n' + data.image);
						} else msg.channel.send(answer + '.\n' + data.image);
                    }
                });
        }
    },	
	
	exports.jibberish = {
        description: "Tells you something.",
        process: function(bot, msg, suffix) {
            require("request")("http://mrob.com/time/automome/butan.php",
                function(err, res, body) {
                    if (body) {
                        msg.channel.send(body, {
							tts: false
						})
                    }
                });
        }
    },	
	
    exports.date_fact = {
        description: "Gives a Random Date Fact",
        process: function(bot, msg, suffix) {
            require("request")("http://numbersapi.com/random/date?json",
                function(err, res, body) {
                    var data = JSON.parse(body);
                    if (data && data.text) {
                        msg.channel.send(data.text)
                    }
                });
        }
    }
