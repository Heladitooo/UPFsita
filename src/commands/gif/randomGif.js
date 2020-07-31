const random = require("../../random");

function randomGif(categorie){
    let numberRandom = random(0, 7);
    let gifList = {
        hug: [
            "http://gph.is/1c3Jnpv",
            "http://gph.is/2hfpRmE",
            "https://gph.is/XJHD3t",
            "https://gph.is/1crO8xF",
            "https://gph.is/11S0zQw",
            "https://gph.is/1dunqqc",
            "https://gph.is/1iHRX1n",
            "https://gph.is/1hhae66",
            "https://gph.is/1wHHNsY",
        ],
        kiss: [
            "https://media.giphy.com/media/ofF5ftkB75n2/giphy.gif",
            "https://media.giphy.com/media/rgKYOTci2kCI/giphy.gif",
            "https://media.giphy.com/media/H8XZI3PJm258c/giphy.gif",
            "https://media.giphy.com/media/H8XZI3PJm258c/giphy.gif",
            "https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
            "https://media.giphy.com/media/rgKYOTci2kCI/giphy.gif",
            "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
            "https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif",
        ],
        happy: [
            "https://media1.tenor.com/images/0887e034e8edc65a8eb94e68d376292e/tenor.gif",
        ]
    }

    if(categorie == "kiss"){
        return gifList.kiss[numberRandom];
    }

    if (categorie == "happy") {
        return gifList.happy[0];
    }
    

}

module.exports = randomGif;