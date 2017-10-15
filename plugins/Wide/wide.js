exports.commands = [
	"aesthetic"
];

exports.aesthetic = {
    usage:"<text>",
    description: "Makes your text aesthetic",
    process: (bot, msg, text) => {
        var aesthetics = {
			"\n": " ",
            " ": " ",
            "`": "`",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "0": "0",
            "-": "-",
            "=": "=",
            "~": "~",
            "!": "!",
            "@": "@",
            "#": "#",
            "$": "$",
            "%": "%",
            "^": "^",
            "&": "&",
            "*": "*",
            "(": "(",
            ")": ")",
            "_": "_",
            "+": "+",
            "q": "q",
            "w": "w",
            "e": "e",
            "r": "r",
            "t": "t",
            "y": "y",
            "u": "u",
            "i": "i",
            "o": "o",
            "p": "p",
            "[": "[",
            "]": "]",
            "\\": "\\",
            "Q": "Q",
            "W": "W",
            "E": "E",
            "R": "R",
            "T": "T",
            "Y": "Y",
            "U": "U",
            "I": "I",
            "O": "O",
            "P": "P",
            "{": "{",
            "}": "}",
            "|": "|",
            "a": "a",
            "s": "s",
            "d": "d",
            "f": "f",
            "g": "g",
            "h": "h",
            "j": "j",
            "k": "k",
            "l": "l",
            ";": ";",
            "'": "'",
            "A": "A",
            "S": "S",
            "D": "D",
            "F": "F",
            "G": "G",
            "H": "H",
            "J": "J",
            "K": "K",
            "L": "L",
            ":": ":",
            "\"": "\"",
            "z": "z",
            "x": "x",
            "c": "c",
            "v": "v",
            "b": "b",
            "n": "n",
            "m": "m",
            ",": ",",
            ".": ".",
            "/": "/",
            "Z": "Z",
            "X": "X",
            "C": "C",
            "V": "V",
            "B": "B",
            "N": "N",
            "M": "M",
            "<": "<",
            ">": ">",
            "?": "?"
        };
		text = text || "";
		text = text.replace(/\n|\t/g, ' ');
        var output = "";
        for (var i = 0; i<text.length; i++){
            if (aesthetics[text[i]])
                output += aesthetics[text[i]];
            else {
                msg.channel.send("Some characters unsupported: " + text[i]);
                return;
            }
        }
		output = output? output : "aesthetic: no text provided";
        msg.channel.send(output);
    }
};