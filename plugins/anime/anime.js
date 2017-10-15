var aq = require('animequote');

exports.commands = [
    "anime_quote"
]
	
    exports.anime_quote = {
        description: "Gives a Random Anime Quote",
        process: function(bot, msg, suffix) {
            msg.channel.send(aq().quotesentence + "\n-~~" + aq().quotecharacter + " from " + aq().quoteanime)
        }
    }
