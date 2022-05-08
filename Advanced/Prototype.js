function Dog(name, color) {
    this.name = name;
    this.color = color;
};

Dog.prototype.numLegs = 4;

const beagle = new Dog('Beagle', 'yellow');

//ownProps, proptotypeProps
const ownProps = [];
const prototypeProps = [];
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log('ownProps: ', ownProps);
console.log('prototypeProps:, ', prototypeProps);

//Prototype chain
/*Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat() {
        console.log('Eating...');
    }
}*/

console.log(Object.prototype.isPrototypeOf(Dog.prototype));
console.log(Dog.prototype.isPrototypeOf(beagle));

//Inherit
function Animal() {
    age: 20
}

Animal.prototype = {
    constructor: Animal,
    run(){
        console.log('Running...');
    }
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
const pitpull = new Dog('Pit', 'black');
console.log(pitpull.numLegs);
console.log(pitpull.age);