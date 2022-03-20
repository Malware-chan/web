class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    move() {
        super.move();
        console.log('circle move');
    }

    draw() {
        console.log('circle');
    }
}