let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 240
    },
    {
        id: 2,
        name: 'HTML',
        coin: 0
    },
    {
        id: 3,
        name: 'CSS',
        coin: 400
    },
    {
        id: 4,
        name: 'jQuery Ajax',
        coin: 1000
    }
];

/*Array methods:
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

courses.forEach((course, index) => {
    console.log(index, course);
});

let isFree = courses.every((course, index) => {
    return course.coin === 0;
});
console.log(isFree);

isFree = courses.some((course, index) => {
    return course.coin === 0;
});
console.log(isFree);

let courseFind = courses.find((course, index) => {
    return course.name === 'HTML';
});
console.log(courseFind);

let courseFilter = courses.filter((course, index) => {
    return course.coin >= 400;
});
console.log(courseFilter);

let courseMap = courses.map((course, index) => {
    return `<h1>${course.name}</h1>`;
})
console.log(courseMap);

let totalCoin = courses.reduce((previousValue, currentValue, currentIndex) => {
    return previousValue + currentValue.coin;
}, 0);
console.log(totalCoin);

//MY ARRAY METHODS
//forEach2()
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
    
}

courses.forEach2((course, index) => {
    console.log('forEach2', course);
});

//every2()
Array.prototype.every2 = function(callback){
    let result = true;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i) === false) {
            result = false;
            break;
        }
    }
    return result;
};

isFree = courses.every2((course, index) => {
    return course.coin === 0;
});
console.log(isFree);

//some2()
Array.prototype.some2 = function(callback){
    let result = false;
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i) === true) {
            result = true;
            break;
        }
    }
    return result;
};

isFree = courses.some2((course, index) => {
    return course.coin === 0;
});
console.log(isFree);

//find2()
Array.prototype.find2 = function(callback) {
    let result;
    for (let i = 0; i < this.length ; i++){
        if (callback(this[i], i) === true) {
            result = this[i];
            break;
        }
    };
    return result;
};

courseFind = courses.find2((course, index) => {
    return course.name === 'HTML';
});
console.log(courseFind);

//filter2()
Array.prototype.filter2 = function(callback){
    let results = [];
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i) === true){
            results.push(this[i]);
        }
    }
    return results;
};

courseFilter = courses.filter2((course, index) => {
    return course.coin >= 400;
});
console.log(courseFilter);

//map2()
Array.prototype.map2 = function(callback){
    let results = []
    for (let i = 0; i < this.length; i++){
        let result = callback(this[i], i);
        results.push(result);
    }
    return results;
};

courseMap = courses.map2((course, index) => {
    return `<h2>${course.name}</h2>`;
});
console.log(courseMap);

//reduce2()
Array.prototype.reduce2 = function(callback, initialValue) {
    let result;
    let previousValue = initialValue;
    for (let i = 0; i < this.length; i++){
        previousValue = callback(previousValue, this[i], i);
    }
    result = previousValue;
    return result;
};

totalCoin = courses.reduce2((previousValue, course, index) => {
    return previousValue + course.coin;
}, 0);
console.log(totalCoin);