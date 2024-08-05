const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(current);
    return oldestAge < currentAge ? current : oldest;
  });
};

const getAge = function (person) {
  return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
