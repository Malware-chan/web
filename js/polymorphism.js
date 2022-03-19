/* Polymorphism */
function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {

}
Shape.prototype.draw = function() {
    console.log('draw');
}

function Circle(radius) {
    this.radius = radius;
}

extend(Shape, Circle);
Circle.prototype.draw = function() {
    console.log('draw circle');
}

function Square(size) {
    this.size = size;
}

extend(Shape, Square);
Square.prototype.draw = function() {
    console.log('draw square');
}

c = new Circle(1);
s = new Square(2);
c.draw();
s.draw();