//Asynchronous JavaScript And XML
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getBtn').onclick = function(){
        const req = new XMLHttpRequest();
        req.onload = () => {
            let json = JSON.parse(req.responseText);
            json = json.filter((item) => item.id < 15);
            document.getElementById('json').innerHTML = json;
        };
        req.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
        req.send();
    };

    document.getElementById('postBtn').onclick = function() {
        const post = new XMLHttpRequest();
        post.onload = () => {
            let json = JSON.parse(post.responseText);
            document.getElementById('message').innerHTML = json.userName;
        };
        post.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
        const body = JSON.stringify({
            userName: "Nguyen Bao",
            age: 26
        });
        post.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        post.send(body);
    };
});