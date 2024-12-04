function oddAverage(numbers){
    const odd = [];
    for(const number of numbers){
        if(number % 2 === 1){
          //  console.log(number);
          odd.push(number);
        }
    }
    //console.log(odd);
    let sum = 0;
    for(const number of odd){
        sum = sum + number;
    }
    const count = odd.length;
    console.log(sum, count);
    const avrg =sum / count;
    return avrg;
}
const numbers = [42, 13, 58,65, 81, 96, 7, 5];
const avrg = oddAverage(numbers);
console.log('avargae of the odd number is :',avrg);