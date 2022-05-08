function createCounter(){
    "use strict"

    let counter = 0;
    return increase;
    function increase(){
        return ++counter;
    }
}

const count1 = createCounter();
console.log(count1());
console.log(count1());
console.log(count1());

const count2 = createCounter();
console.log(count2());
console.log(count2());
console.log(count2());