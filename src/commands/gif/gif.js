const Command = require("../command");
const randomGif = require("./randomGif");
const Discord = require("discord.js");
const chooseColor = require("../../chooseColor");

class Gif extends Command {
  constructor(name, description) {
    super(name, description);
    
  }

  on(message){
    let gifSelect = message.content.slice(4);
    
    let gifSelected = randomGif(gifSelect);
    console.log(gifSelect, gifSelected);

    const embed = new Discord.MessageEmbed()
      .setColor(chooseColor())
      .setTitle(gifSelect)
      .setImage(gifSelected);
      
    message.channel.send(embed);
  }
}

module.exports = Gif;
