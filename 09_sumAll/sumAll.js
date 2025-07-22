const sumAll = function(minNum, maxNum) {
    if (Number.isInteger(minNum) && Number.isInteger(maxNum) && minNum > 0 && maxNum > 0){
        let sum = 0;
        if (minNum > maxNum) {
            const temp = minNum;
            minNum = maxNum;
            maxNum = temp;
        }
        for (let i = minNum; i <= maxNum; i++) {
            sum += i;
        }


    return sum;
    } else {
        return "ERROR"
    }
};
 console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
