const Jake = { name: "Jake", birthday: new Date("03/19/1991") };
const Maxwell = { name: "Maxwell", birthday: new Date("01/01/1989") };

const differenceInTime = Jake.birthday.getTime() - Maxwell.birthday.getTime();

const differenceInDays = differenceInTime / (1000 * 3600 * 24);

function calculateDayAmount(person, ageToReach) {
  const currentAgeInMS = new Date() - person.birthday;
  const ageToReachInMS = ageToReach * (1000 * 3600 * 24);

  return `${person.name} will be ${ageToReach} in ${Math.floor(
    (ageToReachInMS - currentAgeInMS) / -(1000 * 3600 * 24)
  )} days`;
}

console.log(
  "Total number of days between birthdays of " +
    Jake.name +
    " and " +
    Maxwell.name +
    " is: " +
    differenceInDays
);

console.log(calculateDayAmount(Jake, 30));
console.log(calculateDayAmount(Maxwell, 30));