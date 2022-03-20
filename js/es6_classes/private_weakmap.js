/* The keys (object type) are weak, meaning that if there's no reference to that kay, it'll be garbage collected */
// Note : the WeakMap should be in a separate module, and only export the class
const _radius = new WeakMap();
const _move = new WeakMap();
const _move2 = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);

        _move.set(this, function() {
            console.log('move', this);
        });

        _move2.set(this, () => {
            // Arrow function inherits the context (this),this 'this' won't be undefined
            console.log('move', this);
        });
    }

    draw() {
        console.log(_radius.get(this));
        _move.get(this)();
        _move2.get(this)();
    }
}

const c = new Circle(1);





// Alternative syntax
const privateProps = new WeakMap();
class Square {
    constructor(size) {
        privateProps.set(this, {
            size: size,
            draw: () => {
                console.log('draw');
            }
        });
    }

    // Getting the property
    move() {
        privateProps.get(this).size;
    }
}



/* Getters and setters */
const _size = new WeakMap();
class Shape {

    constructor(size) {
        _size.set(this, size);
    }

    get size() {
        return _size.get(this);
    }

    set size(size) {
        _size.set(this, size);
    }
}

const shape = new Shape(1);
console.log(shape.size);