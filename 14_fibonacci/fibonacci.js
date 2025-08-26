const fibonacci = function(pos) {
    let count;
    if (typeof pos !== 'number') {
        count = parseInt(pos);
    } else {
        count = pos;
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    
    let next = 1;
    let prev = 0;
    
    // create fibonacci array
    for (let i = 2; i <= count; i++) {
        let current = next + prev;
        prev = next; 
        next = current;
    };
    // return last value of array
    return next;
};

// Do not edit below this line
module.exports = fibonacci;