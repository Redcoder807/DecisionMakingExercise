let randomNum = Math.random();
randomNum *= 5;
randomNum ++;
randomNum = Math.floor(randomNum);
console.log(randomNum);
if (randomNum >= 4) {
    console.log(`Greater than or equal to 4`);
} else if (randomNum === 2 || randomNum === 3) {
    console.log(`Equal to 2 or 3`);
} else {
    console.log(`Equal to 1`);
}

if (randomNum != 3) {
    console.log("Not equal to 3");
}

if (randomNum !== 3 && randomNum !== 5) {
    console.log("NOT equal to 3 AND not equal to 5");
}


if (randomNum === 4 || randomNum === 2) {
    console.log("Equal to 2 OR equal to 4");
} 

// Bonus

console.log(randomNum);

randomNum >= 4 ? console.log("Greater than or equal to 4") : console.log("Less than 4");

console.log(randomNum);

// Switch Statement takes a parameter/argument abd returns something based on the CASE (Or the match) that the parameter/argument goes with
// In this example if randomNum is 1 it will display "One" in terminal, if randomNum is 2 it will display "Two", etc.
switch (randomNum) {
    case 1:
        console.log("One");
        // Break Keywords are needed between each case so that the code for the case that follows does NOT also run
        break;
    case 2:
        console.log("Two");
        break;        
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
    // Default works like ELSE in a conditional statement (If the value does NOT match any of the cases, then it will run what is in the default)
    // default:
    //     console.log("Five");
    // There is no need for a BREAK at the end of a switch statement since there are no other cases
}