//funcionalidades:
//  mandar gifs dependiendo de el comando
//  responder a insultos
//  8ball lovecalc
// posiblemente ruleta rusa

const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client(); //Nuevo cliente de discord
    
const BadWords = require("./src/badWords");
const badWords = new BadWords();

const Commads = require("./src/commands");
const commads = new Commads();

client.on("ready", () => {
    console.log("Hello word!");
    commads.init();

    client.user.setPresence({
        status: "online",
        activity: {
            name: "upf!help :3   v1.4.0",
            type: "PLAYING"
        }
    });
});

client.on("message", (message) => {
    if (commads.particion(message)) {
      commads.findCommand(message);
    }

    badWords.findWord(message,(data) => {
        if (data && message.author != "736342162886623313"){
            message.author.send("https://pbs.twimg.com/media/EZiN_NbX0AANLZG.jpg \n");
            message.author.send("escribiste: " + message.content +". **usa buen vocabulario 7-7, tu mensaje fue borrado.**");

            fs.appendFile("./src/badWords/badWords.txt", message.author.username + "   " + message.content + " " + new Date() + "\n", 
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(message.author.username + " " + message.content + " " + new Date());
                })

            message.delete();

        }
    })
    
});

client.login("NzM2MzQyMTYyODg2NjIzMzEz.XxtaFA.LUWmb4Nz17Fcpj2JqIYWWD84aLM");