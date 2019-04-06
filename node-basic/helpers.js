function sum(a, b) {
    console.log(this);
    return a + b;
};


const sum2 = (a, b) => {
    console.log(this);
    a + b;

}


module.exports = {
    sum,
    sum2
};


// console.log(process);