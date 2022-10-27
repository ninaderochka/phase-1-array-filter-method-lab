// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());

}



function fuzzyMatch (drivers, string) {
    const firstString = string[0].toLowerCase()
    return drivers.filter((driver) => {

        const firstLetter = driver[0].toLowerCase() 
       
        if (firstLetter === firstString) {
            return true;
        } else return false;
     })
}

console.log(fuzzyMatch(drivers, 'S'))


const driverObjects = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (drivers, string) {
    const lowerString = string.toLowerCase()
    return drivers.filter(driver => driver.name.toLowerCase() === lowerString)
}

console.log(matchName(driverObjects, "sally"))