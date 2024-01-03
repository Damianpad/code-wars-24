/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

num
if even: multiply by 8
otherwise: multiply by 9

*/

function simpleMultiplication(number){
    return number % 2 === 0 ? number * 8 : number * 9;
}

// Top rated solution:
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}