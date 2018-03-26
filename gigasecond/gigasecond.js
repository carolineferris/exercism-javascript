function Gigasecond(date) {
    this.birthDate = date;
}

Gigasecond.prototype.date = function() {
    var birthTime = this.birthDate.getTime();
    return new Date(birthTime + 1000000000000);
}

module.exports = Gigasecond;