let Say = require("./commands/say");
let Gevaraconaguaazulada = require("./commands/gevaraconaguaazulada");
let Help = require("./commands/help");
let Gif = require("./commands/gif/gif");

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
      new Gif("comandos gif: ", "upf!kiss, upf!happy")
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
        } 

      } else {
        if (posibleCommand == "happy" || posibleCommand == "kiss") {
          this.command.list[3].on(message);
          }
        else {
          message.channel.send("el comando no existe UnU, intenta con: upf!help");    
        }
          
      }
        
    
  }
}

module.exports = Commands;