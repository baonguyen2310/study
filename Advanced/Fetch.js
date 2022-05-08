//Fetch API
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getBtn').onclick = function(){
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((json) => {
                json = json.filter((item) => item.id < 20);
                document.getElementById('json').innerHTML = json;
            })
            .catch((err) =>{
                console.log(err)
            })
            .finally (() => {
                console.log('DONE!');
            });
    };

    document.getElementById('postBtn').onclick = function(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                userName: "Chi Nguyen",
                age: 26
            })
        })
        .then((response) => response.json())
        .then((json) => {
            document.getElementById('message').innerHTML = json.userName;
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            console.log('POSTED!');
        })
    };
});