const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const matchingPeople = []
function findMatching(drivers, driver) {
    return drivers.filter(
        (matchingPeople) => matchingPeople.toLowerCase() === driver.toLowerCase()
        );
}

function fuzzyMatch(drivers, beginningLetters) {
    return drivers.filter(
      (matchingPeople) =>
        matchingPeople.toLowerCase().indexOf(beginningLetters.toLowerCase()) === 0
    );
  }
  function matchName(drivers, driver) {
    return drivers.filter((drivers) => drivers.name === driver);
  }