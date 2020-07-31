//funcionalidades:
//  mandar gifs dependiendo de el comando
//  responder a insultos
//  8ball lovecalc
// posiblemente ruleta rusa

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
            name: "upf!help :3   v1.3.0",
            type: "PLAYING"
        }
    });
});

client.on("message", (message) => {
    if (commads.particion(message)) {
      commads.findCommand(message);
    }



    badWords.findWord(message,(data) => {
        if(data){
            message.channel.send("No, tu.")
            badWords.counterWords++;
        }
    })
    
    if (badWords.counterWords > 4){
        badWords.counterWords = 0;
        message.channel.send("https://www.youtube.com/watch?v=uBbwZCRIILM")
    }
});

client.login("NzM2MzQyMTYyODg2NjIzMzEz.XxtaFA.Oweg_izJFScps43qhaUdxyULnxo");