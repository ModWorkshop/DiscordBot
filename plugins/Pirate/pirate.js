var pirateSpeak = require('pirate-speak');

exports.commands = [
    "pirate"
]
	
    exports.pirate = {
        description: "Converts to pirate speak",
        process: function(bot, msg, suffix) {
			//if(suffix) 
			var message = pirateSpeak.translate(suffix);
				msg.channel.send(message);
			//else msg.channel.send("You should give me a message")
        }
    }
