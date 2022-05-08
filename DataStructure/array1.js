let arr = [];

let n = 14;
let d = 4;

//Change size of array
function builtIn(arr) {
    const newArr = [...arr];
    for (let i = 0; i < d; i++){
        newArr.push(newArr[i]);
    }
    
    for (let i = 0; i < d; i++){
        newArr.shift(newArr[i]);
    }
    return newArr;
}

for (let i = 0; i < n; i++){
    arr.push(i + 1);
}

console.log(builtIn(arr));

//Not change size of array
function notBuiltIn(arr) {
    const newArr = [...arr];
    for (let i = 0; i < d; i++){
        let temp = newArr[0];
        for (let j = 0; j < n - 1; j++){
            newArr[j] = newArr[j+1];
        }
        newArr[n-1] = temp;
    }
    return newArr;
}

console.log(notBuiltIn(arr));

//Reverse array
function reverseArray(myArr) {
    const arr = [...myArr];
    n = arr.length;
    let start = 0;
    let end = n-1;
    while(start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start += 1;
        end -= 1;
    }
    return arr;
}

document.write(reverseArray(arr));

//Spread Operator, indexOf
console.log([...arr, [...arr]]);

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 5], [3, 13, 26], [19, 3, 9]], 3));

//Object
/*
  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let count = 0;
    for (let user in usersObj) {
        console.log(user);
        if (usersObj[user].online === true) {
            count += 1;
      }
    }
    return count
  }
  
  console.log(countOnline(users));
*/

//BUILT IN NOT CHANGE ARRAY
console.log(arr.toString());
console.log(arr.join(', '));
console.log(arr.concat(arr));
console.log(arr.slice(-2, -1));
console.log(arr);

//BUILT IN CHANGE ARRAY
arr.push('Banana');
arr.pop();
arr.shift();
arr.unshift('Apple');
arr.splice(-2, 1, 'Cider');
console.log(arr);
