const x = 10;
const y = 15;
let z;
let a;

// if, else if, else

if (x > y) {
    z = 'x is greater then y';
}

else if (x < y) {
    z = 'x is less than y';
}

else if (x === y) {
    z = 'x is equal to y';
}

else {
    z = 'Invalid Operation';
}

// switch ... case

a = 'Greater Than';

switch (a) {
    case 'Greater Than':
        z = 'x is greater then y';
        break;

    case 'Less Than':
        z = 'x is less than y';
        break;

    case 'Equal To':
        z = 'x is equal to y';
        break;

    default:
        z = 'Invalid Operation';
}

// for Loop

for (let i = 1; i <= 5; i += 1) {
    console.log(i);
}

// while Loop

let i = 0;

while (i < 5) {
    console.log(i);
    i += 1;
}