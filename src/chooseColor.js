function chooseColor(){
    let random = Math.floor(Math.random()*2);
    console.log(random);
    if(random == 1) {
        return "#00719e";
    }
    else {
        return "#ec9f00";
    }
}

module.exports = chooseColor;