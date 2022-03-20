/* ES6 Classes - syntactic sugar for prototypical inheritance */
function CircleOLD(radius) {
    this.radius = radius;
    this.draw = function() { console.log('circle'); }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log('this method will appear in the object instance')
        }
    }

    draw() {
        console.log('this method will appear in __proto__');
    }
}

const circle = new Circle(1);
typeof(circle); // "function"



// Hoisting
// Class Declaration - not hoisted (unlike functions)
class Triangle {

}
// Class Expression - not hoisted
const Square = class {

};