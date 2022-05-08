document.addEventListener('DOMContentLoaded', 
  function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET", "https://jsonplaceholder.typicode.com/photos", true); //true: là asynchronous, open là khởi tạo
      req.send();
      req.onload = function(){
        let json = JSON.parse(req.responseText);  //http gửi bằng bytes phải parse lại thành json
        //document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        let html = ""
        //json = json.slice(0,10);
        json = json.filter(function(val){
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
    }
  };

  //geolocation

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      document.getElementById('position').innerHTML =
      'latitude: ' + position.coords.latitude + "<br>" +
      'longitude: ' + position.coords.longitude;
    });
  };

  //POST API

  document.getElementById("postName").onclick = function(){
    const userName = document.getElementById('name').value;
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const post = new XMLHttpRequest();
    
    post.open('POST', url, true);
    
    post.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
    post.onreadystatechange = function(){
      if(post.readyState === 4 && post.status === 201){
        const serverResponse = JSON.parse(post.response);
        document.getElementsByClassName('message')[0].textContent =
        serverResponse.userName + serverResponse.suffix;
      };
    };

    const body = JSON.stringify({userName: userName, suffix:' Ajax!'});

    post.send(body);

  };

  }
);