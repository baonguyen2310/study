//IIFE: Immediately invoked function expression

const app = (function(){
	const cars = [];
	return {
		add(car) {
			cars.push(car);
		},
		edit(index, car){
			cars[index] = car;
		},
		delete(index){
			cars.splice(index, 1);
		},
		get(index){
			return cars[index];
		}
	}
})();

//Closure, Hoisting, strict mode

function createCounter(){
	
	"use strict"
	let counter = 0;
	//counter = 0; //undeclared variable, it has global scope
	const obj = {};
	Object.defineProperty(obj, "x", {value:0, writable:false});
	//obj.x = 3.14;            // This will cause an error


	return increase; //Hoisting

	function increase(){
		return ++counter;
	}

	//let counter = 0; //Hoisted but cannot use
	//var counter = 0; //NaN because ++undefined
	

	
}

const count1 = createCounter();
console.log(count1());
console.log(count1());
console.log(count1());
const count2 = createCounter();
console.log(count2());
console.log(count2());
console.log(count2());

//Primitive Type and Reference Type, Pass By Value

let a = 5;
let b = a;
console.log("b: ", b);
a = 6;
console.log("b: ", b);

const obj1 = {
	name: "bao"
};
const obj2 = obj1;
console.log("obj2: ", obj2);
obj1.name = "chi";
console.log("obj2: ", obj2);

const passByValue1 = function(param){
	param = 10;
	console.log("param: ", param)
}
passByValue1(a);
console.log("a: ", a);

const passByValue2 = function(param){
	param.age = 10;
	console.log("param: ", param)
}
passByValue2(obj1);
console.log("obj1: ", obj1);

