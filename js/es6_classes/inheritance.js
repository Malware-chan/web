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

    draw() {
        console.log('circle');
    }
}

const circle = new Circle('blue');