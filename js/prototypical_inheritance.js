/* Prototypical inheritance */ // -> See Mixing
function Shape() {}
Shape.prototype.draw = function() {
    console.log('draw');
}

function Circle(radius) {
    this.radius = radius;
}
// Inheritance
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
c1 = new Circle(1);
c1.draw();
// Circle.prototype.constructor = Circle;
// After setting Circle.prototype = Shape.prototype, the property constructor was set to 'Shape',
// so Circle constructor was lost.



/* Calling te super constructor (L-27) */
function Geometry(color) {
    this.color = color;
}

function GCircle(radius, color) {
    Geometry.call(this, color);
    this.radius = radius;
}
GCircle.prototype = Object.create(Geometry.prototype);
GCircle.prototype.constructor = GCircle;

/* Intermediate Function Inheritance (L-34) */
function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function GSquare(size) {

}
extend(Geometry, GSquare);



/* Overriding a method (See 3) */
Circle.prototype.draw = function() {
    console.log('draw circle');
    // Calling the super implementation
    Shape.prototype.draw.call(this);
}