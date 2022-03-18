// Hoisting is the process of moving all function declarations to the top (by the JS Engine)
// Function Declaration - can be called before being declared
function walk() {
    console.log('walk');
}
// Anonymous Function Expression - cannot be called before being declared
let run = function() {
    console.log('run');
};
// Named Function Expression - cannot be called before being declared
let flan = function Flan() {
    console.log('Flan');
};


// Functions are objects
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('circle');
    }
}

const Circle1 = new Function(`radius`,
    `this.radius = radius;
     this.draw = function() {
     console.log('circle');
    }`
);

const circle = new Circle1(1);

Circle.call({}, 1);
// .call({}, 1) = new Circle(1); 
// {} (empty object) = context for 'this'
// if you don't pass {} as argument, that is, don't use the 'new' keyword, 
// 'this' will point to the global object which is 'window' (.call(window, 1))

// .apply({}, [1, 2, 3]) same as .call, but second arg is an array



// Arrow functions
const found = courses.find(function(course) {
    return course.name === 'a';
});

const arrow = courses.find((arg1, arg2) => {
    return course.name === 'a';
});

const arrowNoArgs = courses.find(() => {
    return course.name === 'a';
});

const arrowSingleline = courses.find(course => course.name === 'a');



// Variable-length Arguments ... arguments property
function sum1() {
    let sum = 0;
    for (let value of arguments)
        sum += value;

    return sum;
}
sum1(1, 4, 5, 6, 7, 3, 4);
// The Rest Operator / Rest Parameter
function sum2(...args) {
    return args.reduce((a, b) => a + b);
}
sum2(1, 4, 5, 6, 7, 3, 4);



// Default values
function qwerty1(arg1, arg2) {
    let arg1 = arg1 || 10;
    let arg2 = arg2 || 3.4;
    return arg1 * arg2;
}

function qwerty2(arg1 = 10, arg2 = 3.4) {
    return arg1 * arg2;
}

// Pass 'undefined' to use the default value
qwerty2(undefined, 10);




// Getters and Setters - can be accessed like properties
const user = {
    fname: '',
    lname: '',
    get fullname() {
        return `${user.fname} ${user.lname}`
    },
    set fullname(name) {
        const parts = name.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
}
user.fullname = 'Pepo Froggo';
console.log(user.fullname);

// Getters and Setters (again 1)
// Abstraction - private members { Variables (let) are private }
function Point(x, y) {
    this.x = x;
    this.y = y;
    let color = red;
    let calc = function() {};
    this.draw = function() {};
}

// Getters and Setters (again 2)
function Point2(x, y) {
    let location = { 'x': x, 'y': y };
    Object.defineProperty(this, 'location', {
        get: function() {
            return location;
        },
        set: function(value) {
            // Perform validation
            location = value;
        }
    });
}