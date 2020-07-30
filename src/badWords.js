class BadWords {
  constructor() {
    this.counterWords = 0;
    this.words = [
      "tarado",
      "tarada",
      "pendejo",
      "pendeja",
      "tonto",
      "idiota",
      "imbecil",
      "inutil",
      "burro",
      "burra",
      "toxico",
      "toxica",
      "estupido",
      "estupida",
      "puto",
      "puta",
      "perra",
      "tonta",
    ];
  }

  findWord(message, cb) {
    for (let i = 0; i < this.words.length; i++) {
      if (message.content.includes(this.words[i])) {
        cb(true);
        break;
      }
    }
    this.words.map((data) => {
      return data;
    });
  }
}

module.exports = BadWords;