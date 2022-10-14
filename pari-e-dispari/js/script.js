//ask the user for a number and if he want even or odd
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

while (userNumber > 5 || userNumber < 1 || isNaN(userNumber)) {
    userNumber = parseInt(prompt("Non hai inserito un numero da 1 a 5! Inserisci un numero da 1 a 5"));
}

let userOddOrEven = prompt("Scegli se pari o dispari");

while ( !(userOddOrEven === "pari") && !(userOddOrEven === "dispari") ) {
    userOddOrEven = (prompt("Non hai scritto pari o dispari. Scegli pari o dispari"));
}

//generate a random number for the cpu
const cpuRandomNum = generateRandomNumber(1, 5)
console.log(cpuRandomNum);

//sum the random number with the user number
const sum = cpuRandomNum + userNumber;
console.log(sum);

//Check is the sum is even
let theSumIsEven = isEven(sum);
console.log(theSumIsEven);
let result = ""

if(theSumIsEven === true) {

    result = "pari"
} else if(theSumIsEven === false){
    result = "dispari"
}

if(theSumIsEven && userOddOrEven === "pari" || theSumIsEven === false && userOddOrEven === "dispari"){
    alert("Complimenti! Hai vinto." + text(cpuRandomNum, userNumber, sum) + result)
} else {
    alert("Mi dispiace! Hai perso." + text(cpuRandomNum, userNumber, sum) + result)
}

//functions
//random number generator
function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber
}

//odd or even check
function isEven(number) {
    let isEven = false;

    if (number % 2 === 0) {
        isEven = true
    }

    return isEven
}

//output
function text(randomNumber, userNumber, sum){
    const message = `Il numero generato dal comuputer è ${randomNumber}. La somma del tuo numero (${userNumber}) e ${randomNumber} è di ${sum}, che è un numero `
   return message
}