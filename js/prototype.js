/* Inheritance - classical vs prototypical */
// Prototype -> Parent or base for another object
// Object.getPrototypeOf(object) -> same as -> object.__proto__

function Circle(radius) {
    // Instance member - one copy for each instance
    this.radius = radius;
}

// Prototype members - a single copy for all instances
Circle.prototype.draw = function() {
    console.log('draw');
}
Circle.prototype.toString = function() {
    console.log('Circle with radius: ' + this.radius);
}

c1 = new Circle(3);
c2 = new Circle(7);

c1.toString();
c2.toString();



// Only returns instance members ('radius')
console.log(Object.keys(c1));
// Returns all members ('radius', 'draw', 'toString')
for (let key in c1) console.log(key);

c1.hasOwnProperty('radius'); // true; 'draw'=false