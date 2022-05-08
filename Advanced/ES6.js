//Rest parameter
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3);

//Spread Operator
let arr1 = [1, 2 , 3];
let arr2 = [...arr1];

//Destructuring Assignment
const user = {
    age: 26,
    name: 'Bao Nguyen'
}

const {age, name} = user;
const {age: userAge, name: userName} = user;

let a = 8, b = 6;
[a, b] = [b, a];
let list = [1, 2, 3, 4, 5];
[, , ...arr] = list;
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0;
console.log(half(stats));

//Template literal
const myLiteral = `Stats average is: ${stats.average}`;

//Class
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');