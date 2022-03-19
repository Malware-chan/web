/* Mixing */ // -> See Prototypical Inheritance
const readable = {
    read: function() {
        console.log('read')
    }
};

const writable = {
    write: function() {
        console.log('write');
    }
};

// Compose -> assing copies the properties and methods of an object to another
// const file = Object.assign({}, readable, writable);

function File() {

}
Object.assign(File.prototype, readable, writable)

file = new File();
console.log(file);


//
function compose(target, ...sources) {
    Object.assign(target, ...sources);
}