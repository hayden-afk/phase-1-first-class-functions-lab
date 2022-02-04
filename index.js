let drivers = ["Antonia", "Nuru", "Amari", "Mo"];


function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2,5)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = i => {
    return function(fare) {
        return fare * i;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}