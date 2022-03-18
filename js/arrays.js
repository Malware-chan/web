const arr = ['Flan', 514, 495, true];

for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);

for (let index in arr)
    console.log(arr[index]);

for (let x of arr)
    console.log(x);

arr.forEach((number, index) => console.log(index, number));





// nums is a constant, so it can't be reassigned (nums = []), but the content can be modified
const nums = [1, 2, 3];

// Add / remove (and get) at the end
nums.push(4, 5);
nums.pop();
// Add / remove (and get) at the beggining
nums.unshift(-1, 0);
nums.shift();
// Add at index (index, deleteCount, values...) / remove
nums.splice(3, 0, 'a', 'b');
nums.splice(2, 1);


// Clear - empty
let n = [1, 2, 3];
n = [];
// Better if there is multiple references to 'n'
n.length = 0;
n.splice(0, n.length);


// Concat and slice
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
let cs = a1.concat(a2);
let cs2 = [...a1, ...a2];
let sl = cs.slice(); // Copy
sl = cs.slice(3); // Copy from index 3
sl = cs.slice(3, 5); // Copy from 3 to 5

// Find primitive type (item to find, fromIndex [optional])
const numbers = [0, 1, 2, 2, 4];
numbers.indexOf(2);
numbers.lastIndexOf(2);
numbers.includes(1);

// Find reference type
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const found = courses.find(function(course) {
    return course.name === 'a';
});

const foundAt = courses.findIndex(function(course) {
    return course.name === 'a';
});



// Array to string (separator) and string to array (separator)
const ns = [1, 2, 4, 5];
console.log(ns.join(','));
const str = 'This is a test';
console.log(str.split(' '));


// Array sorting
ns.sort();
ns.reverse();

// Sorting complex types (example based on ASCII values)
const tutorials = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'PHP' }
];
tutorials.sort(function(a, b) {
    const A = a.name.toLowerCase();
    const B = b.name.toLowerCase();
    if (A < B) return -1;
    if (A > B) return 1;
    return 0;
});


// Every (all) - some (at least one)
const allPositive = ns.every(function(value) {
    return value >= 0;
});

const some = ns.some(function(value) {
    return value >= 0;
});

// Filter - adds matching items to a new array
const filtered = ns.filter(function(value) {
    return value >= 0;
});

// Map - map everything in an array into something else
const objs = filtered.map(n => {
    return { value: n };
});

// Reducing an array
const reduce = [1, 2, 3, 4];
const r = reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
// You can ommit the initialization of currentValue, it'll take the value of the first item in the array, same as
let sum = 0;
for (let r of reduce)
    sum += r;