//Callback hell Asynchronous
setTimeout(function(){
    console.log('START');
    console.log('1');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
            setTimeout(() => {
                console.log('DONE!');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

//Promise chain
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('START');
        }, ms);
    })
}

sleep(1000)
    .then((response) => {
        console.log(response);
        console.log(1);
        return sleep(1000);
    })
    .then(() => {
        console.log(2);
        return sleep(1000);
    })
    .then(() => {
        console.log(3);
        return sleep(1000);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('DONE!');
    });

//Async await keywords
const executeAsync = async () => {
    try {
        await sleep(1000);
        console.log('START');
        console.log(1);
        await sleep(1000);
        console.log(2);
        await sleep(1000);
        console.log(3);
        await sleep(1000);
    } catch(err) {
        console.log(err);
    } finally {
        console.log('DONE!');
    }
}

executeAsync();