var Bob = function() {
    var notSpeaking = function(input) {
        return /^\s*$/.test(input);
    };

    var isShouting = function(input) {
        return input.toUpperCase() === input && input.toLowerCase() !== input;
    };

    var isQuestion = function(input) {
        return input.trim().charAt(input.trim().length - 1) === '?';
    };

    this.hey = function(input) {
        if (notSpeaking(input)) {
            return 'Fine. Be that way!';
        }

        if (isShouting(input)) {
            return 'Whoa, chill out!';
        }

        if (isQuestion(input)) {
            return 'Sure.';
        }

        return 'Whatever.';
    };
};

module.exports = Bob;