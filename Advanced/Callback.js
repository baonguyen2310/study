//Callback

function anotherFunction(param) {
    if (typeof param === 'function') {
        param('Hello Callback');
    }
    return typeof param;
}

function param(myString){
    console.log(myString);
}

console.log(anotherFunction(2));
console.log(anotherFunction(param));