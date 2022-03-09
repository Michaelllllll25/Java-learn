// Video
let namee = 'Michael';
console.log(namee);

// Cammel notation (name varriables)
let firstName = 'Josh';
let lastName = 'Wilson';

// ------------
// const interestRate = 0.3;             Making constant varriable
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//------------
let name = 'Mike';
let age = 20;
let isApproved = true;
let first;                       // undefined
let last = null;                // clear value of varriable

//----------------

let person = {
    namer: 'MOS',
    ager: 30
};

// Dot notation
person.namer = 'John';

// Bracket notation
person['namer'] = 'Mary';

let selection = 'namer';
person[selection] = 'Mary';


console.log(person)
console.log(person.namer)

//-------------
let selectedColours = ['red', 'blue'];        // [] is an array
selectedColours[2] = 'green';
selectedColours[3] = 1;
console.log(selectedColours);
console.log(selectedColours[0]);        // red
console.log(selectedColours.length);

//------------ Functions
function greet(namest, lastest) {
    console.log('Hello ' + namest + ' ' + lastest);
} 

greet('Johnny', 'Willern');
greet('Maaa', 'Maxx');

//-----------------
function nice(nameste, lasteste) {
    console.log('Hello ' + nameste + ' ' + lasteste);
} 

// Calculate value
function square(number) {
    return number * number;
}

let number = square(20);
console.log(number);

console.log(square(200));

