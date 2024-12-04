function inchToFeet(inch) {
    const feet = inch / 12 ;
    return feet ;
}
//const Hieght = inchToFeet(75);
//console.log(Hieght);

////------/////
function inchToFeet2(inch){
    const feetfraction = inch / 12;
    const feetNumber = parseInt(feetfraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}
const Hieght = inchToFeet(75);
const Hieght2 =inchToFeet2(75);
console.log(Hieght2);

//mile - kilometer
function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}
//const result = mileToKilometer(2);
//console.log(result);

// kilometer - miles 
function kilometerToMiles (kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const result = kilometerToMiles(2);
console.log(result);