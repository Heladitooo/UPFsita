const Command = require("./command");

class Help extends Command {
    constructor(name, description) {
        super(name, description);
    }

    on(message, list) {
        message.channel.send("```css\nLista de comandos :D```");
        for (let i = 0; i < list.length; i++) {
            message.channel.send(
                "```fix\n " + list[i].name + " = " + list[i].description + ". ```\n"
            );
        }
    }
}

module.exports = Help;