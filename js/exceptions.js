// Defensive programming

// Error handling - throw exception
const user = {
    fname: '',
    lname: '',
    set fullname(name) {
        if (typeof name !== 'string')
            throw new Error('Wrong input');
        const parts = name.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
}

try {
    user.fullname = null;
} catch (e) {
    console.log(e);
}