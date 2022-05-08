document.addEventListener('DOMContentLoaded', 
  function(){
    document.getElementById('getMessage').onclick = function(){

      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((jsonOrigin) => {
          let html ="";
          let json = jsonOrigin.filter(function(val){
            return val.id <= 10;
          });
          json.forEach(function(val){
            const keys = Object.keys(val); //lấy hết keys của Object val
            html += "<div class='cat'>";
            keys.forEach(function(key){
              html += "<strong>" + key + "</strong>" + val[key] + "<br>";
          });
            html += "<img src = '" + val.url + "' alt = '" + val.title + "'>";
            html += "</div><br>";
      });
          document.getElementsByClassName('message')[0].innerHTML = html;

        });
      }
  
  //POST API

  document.getElementById("postName").onclick = function(){
    const userName = document.getElementById('name').value;
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        userName: userName,
        suffix:' Ajax!'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((json) => {
        document.getElementsByClassName('message')[0].textContent =
        json.userName + json.suffix;
      });
    };

  }
);