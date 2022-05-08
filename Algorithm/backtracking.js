//Liet ke cac day nhi phan do dai n
/*
function binaryN(i){
    for (let j = 0; j <= 1; j++){
        x[i] = j;
        if (i == n-1) {
            console.log(x);
        } else {
            binaryN(i+1);
        }
    }
}
var n = 3;
let x = Array(n).fill(0);

console.log(x);
binaryN(0);
*/

//Phan tich so thanh tong cac so (index from 1)
function extractN(i) {
    
    for (let j = x[i-1]; j <= Math.floor((n-t[i-1])/2); j++){
        x[i] = j;
        t[i] = t[i-1] + x[i];
        extractN(i+1);
    }

    x[i] = n - t[i-1];

    //print result
    var result = [];
    for (let k = 1; k <= i; k++){
        result.push(x[k]);
    }
    console.log(result);
    
}

var n = 6;
let x = Array(n).fill(1);
let t = Array(n).fill(0);

extractN(1);