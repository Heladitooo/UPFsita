let Say = require("./commands/say");
let Gevaraconaguaazulada = require("./commands/gevaraconaguaazulada");
let Help = require("./commands/help");

class Commands {
  constructor() {
    this.command = {
      init: "upf!",
      list: [
        {
          name: "gevaraconaguaazulada",
          description: "gevaraconaguaazulada nwn upf!gevaraconaguaazulada",
        },
        {
          name: "help",
          description: "te doy la lista de comandos upf!help",
        },
      ],
    };
  }

  init(){
    this.command.list = [
      new Say("say", "puedo hacer que yo diga algo con upf!say [tu palabra]"),
      new Gevaraconaguaazulada("gevaraconaguaazulada", "gevaraconaguaazulada nwn upf!gevaraconaguaazulada"),
      new Help("help", "te doy la lista de comandos upf!help")
    ];
  }

  particion(message) {
    if (message.content.slice(0, 4) == this.command.init) {
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
            console.log(commandFind)
          }
        }
        catch {
          commandFind = false;
        }
      }

      if(commandFind != false){
        if(commandFind == this.command.list[0].name){
          this.command.list[0].on(message);
        }
        else if (commandFind == this.command.list[1].name) {
          this.command.list[1].on(message);
        } 
        else if (commandFind == this.command.list[2].name) {
          this.command.list[2].on(message, this.command.list);
        }

      } else {
          message.channel.send("el comando no existe UnU, intenta con: upf!help");    
      }
        
    
  }
}

module.exports = Commands;