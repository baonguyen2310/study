//Reverse array
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
const arr = [1, 2, 3, 4, 5];
reverseArray(arr);
console.log(arr);

//Total left to right with q test sets
//b3 = a1 + a2 + a3
//b2 = a1 + a2
//b1 = a1
//a2 + a3 = b3 - b1
function totalLeftToRight(arr, left, right) {
    const arrSum = [arr.length];
    arrSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++){
        arrSum[i] = arrSum[i-1] + arr[i];
    }
    console.log(arrSum[right]);
    if (left <= right) {
        return arrSum[right] - arrSum[left - 1];
    }
    
}

function qTestSets(arr, q) {
    let left, right, result;
    for (let i = 1; i <= q; i++){
        left = Math.round(Math.random()*arr.length);
        right = Math.round(Math.random()*arr.length);
        result = totalLeftToRight(arr, left, right);
        console.log(`Total ${left} to ${right} is: ${result}`);
    }
}
qTestSets(arr, 3);