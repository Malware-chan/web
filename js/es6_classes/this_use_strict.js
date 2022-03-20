'use strict';

const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
}

const c = new Circle();
// Method Call -> Circle { draw:f }
c.draw();

const draw = c.draw;
// Function Call ('this' points to the global object) -> Window { ... }
draw();

/* 'use strict; */
// If we call a method as a function, with this mode, 'this' won't point to
// the global object. (this = undefined)
// strict mode is enabled by default within a class body