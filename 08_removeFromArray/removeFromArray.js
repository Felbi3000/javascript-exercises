const removeFromArray = function() {
    let array = arguments[0];
    let remove = Array.from(arguments.slice(1))

    newArray = array.filter((item) => {return !remove.includes(item)})
    /* for (let i = arguments[1]; i <= arguments.length; i++){
        array.splice(i,1);
    } */
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
