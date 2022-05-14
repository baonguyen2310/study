// Callback

function anotherFunction(param){
	if (typeof param === "function"){
		param("Hello callback");
	}
	console.log(param, typeof param);
}

function callbackFunction(result){
	console.log(result);
}

anotherFunction(2);
anotherFunction(callbackFunction);

//map2 use callback

var courses = ['Apple', 'Banana', 'Cider'];

Array.prototype.map2 = function(callback){
	var arrayLength = this.length;
	var results = [];
	for (i = 0; i < arrayLength; i++){
		var result = callback(this[i], i);
		results.push(result);
	}
	results = results.join("");
	return results;
}

var htmls = courses.map2(function(course) {
	return `<h2>${course}</h2>` ;
} );

//Callback Hell Asynchronous

setTimeout(function(){
	console.log(1);
	setTimeout(function(){
		console.log(2);
		setTimeout(function(){
			console.log(3);
			setTimeout(function(){
				console.log("DONE!");
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);


//Promise

function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function(){
    	resolve('COUNT UP NOW!');
    }, ms);
  });
}

sleep(1000)
  .then (function(response){
    console.log(response)
    console.log(1);
    return sleep(1000);
  })
  .then (function(){
    console.log(2);
    return sleep(1000);
  })
  .then (function(){
    console.log(3);
    return sleep(1000);
  })
  .catch (function(err){
    console.log(err);
  })
  .finally (function(){
    console.log("DONE!");
  });


//async await
const executeAsync = async () => {
  try {
    const response = await sleep(1000);
    console.log(response);
    console.log(1);
    await sleep(1000);
    console.log(2);
    await sleep(1000);
    console.log(3);
  }
  catch(err){
    console.log(err);
  }
  finally {
    console.log('DONE!');
  }
};
executeAsync();

// Prototype

function Person(_name) {
	this.name = _name || "unknown";
}

Person.prototype.getName = function(){
	return this.name;
}

function Student(_age) {
	this.age = _age || 15;
}

Student.prototype = new Person(); //Option 1
//Student.prototype = Person.prototype; //Option 2
//Student.prototype = Object.create(Person.prototype); //Option 3

Student.prototype.constructor = Student; //not necessary but useful

var Bao = new Student();
console.log(Bao);
console.log(Bao.name); //Option 1 can access direct property of Person

console.log(Bao.hasOwnProperty("name"));
console.log(Bao.hasOwnProperty("age")); //age is direct property of Student

console.log(Bao.__proto__);
console.log(Student.prototype);
console.log(Object.getPrototypeOf(Bao));