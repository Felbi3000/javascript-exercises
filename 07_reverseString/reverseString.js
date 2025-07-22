const reverseString = function(text) {
    let revText = "";
    for (let i = text.length; i > 0; i--) {
        revText += (text.slice(i-1, i));
    }
    return revText;
};

// Do not edit below this line
module.exports = reverseString;
