// Symbol assigns a new unique value
const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;
    }

    // Computed Property Names
    [_draw]() {

    }
}

const c = new Circle(1);
// _radius can't be accessed like this: c._radius

//
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);