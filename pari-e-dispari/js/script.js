//ask the user for a number and if he want even or odd
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

//                      true
//              true            false
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
    const theSumIsEven = isEven(sum);
    console.log(theSumIsEven);


 if(theSumIsEven && userOddOrEven === "pari"){
    alert(`Complimenti, hai vinto! Il numero generato dal comuputer è ${cpuRandomNum} la somma del tuo numero (${userNumber}) e ${cpuRandomNum} è ${sum} che è un numero pari!`)
 } else{
    alert(`Mi dispiace, hai perso! Il numero generato dal comuputer è ${cpuRandomNum} la somma del tuo numero (${userNumber}) e ${cpuRandomNum} è ${sum} che è un numero dispari!`)
 }


//functions
//random number generator
function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber
}

//odd or even check
function isEven(number){
    let isEven = false;

    if (number % 2 === 0) {
        isEven = true
    }

    return isEven
}