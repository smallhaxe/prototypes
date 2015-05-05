module.exports = new Dice();

var Dice = function(sides) {
    this.numberOfSides = sides;
};

Dice.prototype.roll = function() {
    this.rolled = Math.floor(Math.random() * this.numberOfSides);
    this.pastRolls.push(this.rolled);
    console.log(this.rolled);
    return this.rolled;
};
