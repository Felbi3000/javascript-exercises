const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let ages = people.map(person => {
    if (person.yearOfDeath === undefined) {
        person.yearOfDeath = currentYear;
    }
    return person.yearOfDeath - person.yearOfBirth;
    });
    let oldest = 0;
    ages.forEach(element => {
        if (element > oldest) {
            oldest = element;
            
        }   
        console.log(element); 
    });
    let index = ages.indexOf(oldest);
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
