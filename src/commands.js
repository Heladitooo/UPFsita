let Say = require("./commands/say");
let Gevaraconaguaazulada = require("./commands/gevaraconaguaazulada");
let Help = require("./commands/help");
let Gif = require("./commands/gif/gif");
let ThanksYou = require("./commands/thanksYou");

class Commands {
  constructor() {
    this.command = {
      init: "upf!",
      list: [
      ],
    };
  }

  init(){
    this.command.list = [
      new Say("say", "puedo hacer que yo diga algo con upf!say [tu palabra]"),
      new Gevaraconaguaazulada("gevaraconaguaazulada", "gevaraconaguaazulada nwn upf!gevaraconaguaazulada"),
      new Help("help", "te doy la lista de comandos upf!help"),
      new Gif("comandos gif: ", "usa Gifs nwn  upf!kiss, upf!happy, upf!kill, upf!hug, upf!elcomandonoexiste, upf!sleep, upf!hi, upf!angry"),
      new ThanksYou("thanksYou",":D")
    ];
  }

  particion(message) {
    if (message.content.slice(0, 4) == this.command.init){
      return true;
    }
  }

  findCommand(message){
    let posibleCommand = message.content.slice(4).match(/\w+/);
    let commandFind = false;
      for(let i = 0; i < this.command.list.length; i++){
        try{ 
          if (posibleCommand[0] == this.command.list[i].name) {
            commandFind = this.command.list[i].name;
          }
        }
        catch {
          commandFind = false;
        }
      }

      if(commandFind != false){
        if (commandFind == this.command.list[0].name) {
          this.command.list[0].on(message);
        } else if (commandFind == this.command.list[1].name) {
          this.command.list[1].on(message);
        } else if (commandFind == this.command.list[2].name) {
          this.command.list[2].on(message, this.command.list);
        } else if (commandFind == this.command.list[4].name) {
          this.command.list[4].on(message);
        } 

      } else {
        if (
          posibleCommand == "happy" ||
          posibleCommand == "kiss" ||
          posibleCommand == "kill" ||
          posibleCommand == "hug" ||
          posibleCommand == "sleep" ||
          posibleCommand == "hi" ||
          posibleCommand == "angry"
        ) {
          this.command.list[3].on(message, posibleCommand);
        } else {
          message.channel.send(
            "el comando no existe UnU, intenta con: upf!help"
          );
        }
          
      }
        
    
  }
}

module.exports = Commands;