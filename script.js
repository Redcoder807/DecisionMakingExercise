let randomNum = Math.random();
randomNum *= 5;
randomNum ++;
randomNum = Math.floor(randomNum);
console.log(randomNum);
if (randomNum >= 4) {
    console.log(`Greater than or equal to 4`);
} else if (randomNum === 1) {
    console.log(`Equal to 1`);
} else {
    console.log(`Equal to 2 or 3`);
}

if (randomNum != 3) {
    console.log("Not equal to 3");
}

if (randomNum != 3) {
    if (randomNum != 5) {
        console.log("NOT equal to 3 AND not equal to 5");
    }
} else if (randomNum != 5) {
    if (randomNum != 3) {
        console.log("NOT equal to 3 AND not equal to 5");
    }
}

if (randomNum === 4) {
    console.log("Equal to 2 OR equal to 4");
} else if (randomNum === 2) {
    console.log("Equal to 2 OR equal to 4");
}

// Bonus