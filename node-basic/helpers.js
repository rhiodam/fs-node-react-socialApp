function sum(a, b) {
    // console.log(this);
    return a + b;
};


const sum2 = (a, b) => {
    // note : this in arrow function is not global
    console.log('Arrow function this : ' , this);
    return a + b;

}


module.exports = {
    sum,
    sum2
};


// console.log(process);