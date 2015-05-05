module.exports = new Starship();

var Starship = function(model, ownerName) {
    this.model = model;
    this.owner = ownerName;
};

Starship.prototype.setTopSpeed = function(newTopSpeed) {
    this.topSpeed = newTopSpeed;
}

Starship.prototype.getTopSpeed = function() {
    return topSpeed;
}

Starship.accelerateTo(gain) {
    if ((this.CurrentSpeed + gain) <= this.topSpeed) {
        this.currentSpeed += gain;
        console.log('Very speed!');
    } else {
        console.log('Oh, no! Much fast. Slow very now!');
    }
}
