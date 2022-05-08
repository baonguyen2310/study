//this
function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.run = () => {
        console.log('Running...', this);
    }; 
}

const merc = new Car ('Merc', 'red', 85);
console.log(merc.run());

Car.prototype.park = function(){
    console.log(this);
    function test(){
        console.log(this);
    };
    test();
}

merc.park();

document.addEventListener('DOMContentLoaded', function(){
    var postBtn = document.querySelector('button');
    postBtn.onclick = () => {
        console.log(this);
    }
});

console.log(this);

function myfunc(){
    console.log(this);
}
myfunc();

//bind
this.firstName = "Bao";
this.lastName = "Nguyen";

const teacher = {
    firstName: "Chi",
    lastName: "Nguyen",
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const student = {
    firstName: "Quoc",
    lastName: "Viet"
}

console.log(teacher.getFullName());

const getWindowName = teacher.getFullName;
console.log(getWindowName());

const getTeacherName = teacher.getFullName.bind(teacher);
console.log(getTeacherName());

const getStudentName = teacher.getFullName.bind(student);
console.log(getStudentName());

//call
function random() {
    console.log(Math.random());
};

random.call();

console.log(teacher.getFullName.call(student));

function logger() {
    Array.prototype.forEach.call(arguments, item => {
        console.log(item);
    })
}
logger(1, 2, 3, 4, 5);

//apply
function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

let result = greet.apply(teacher, ['Hello', 'What do you do?']);
console.log(result);

result = greet.call(student, 'Hello', 'What do you do?');
console.log(result);

