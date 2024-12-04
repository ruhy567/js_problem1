//simple leapyear : not aplicable
function isleapYear( year ) {
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
//const islipi = isleapYear(2043);
//console.log(islipi);

/*
1.those year that is not divisible by 100 & if the year is divisible by 
then it will be a leap year.
2.if the year is divisible by 400, then it is a leapyear
*/
function isleapYear2( year ) {
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isleap = isleapYear2(2100);
const isleap2 = isleapYear2(2400);
const isleap3= isleapYear2(1900);
const isleap4 = isleapYear2(2052);
console.log (isleap,isleap2,isleap3,isleap4);