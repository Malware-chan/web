const item = {
    name: 'qwerty',
    value: 12.9,
    path: 'opt/q',
    uid: 392
};

for (let key in item)
    console.log(key, item[key]);

for (let key of Object.keys(item))
    console.log(key, item[key]);

for (let entry of Object.entries(item))
    console.log(entry);

if ('name' in item)
    console.log(item['name']);





const circle = {
    radius: 3.3,
    center: {
        x: 51,
        y: 93
    },
    draw: function() {
        console.log('circle');
    }
}

for (let key in circle)
    console.log(key, circle[key]);

circle.draw();





// Factory functions -> produce objects
function makeCircle(radius, xCenter, yCenter) {
    return {
        radius,
        center: {
            x: xCenter,
            y: yCenter
        },
        draw() {
            console.log('circle');
        }
    }
}





// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('circle');
    }
}

const c = new Circle(1);





// Add, delete properties
c.color = 'blue';
delete c.color;

// Constructor property
console.log(circle.constructor);
console.log(c.constructor);

// Clone - this clone will have an additional property: color
const another = Object.assign({ color: 'blue' }, circle);
// Another way to clone
const again = {...circle };