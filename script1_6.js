import {subtract} from './subscript1.js';
console.log(subtract(2,3));

/*
npm install -g http-server
http-server -c-1

http://localhost:8080/web1.html

Nodejs:
- NPM:
  npm install react react-dom
  npm i react react-dom
  npm install --save-dev react react-dom
  npm i -D react react-dom

  --global
  -g
  uninstall
- NPX:
  npx create-react-app myApp //kiem tra trong node_modules/bin

  win7:
  npx create-react-app@3.4.0 my-app

-Webpack:
  npm init //tao file package.json

  npm start //run script trong package.json
  
*/

//JSON
console.log(typeof JSON.stringify([ "JavaScript", "CSS", "HTML" ]));
var json1 = '{"name" : "Chi Bao", "age" : 18}';
console.log(JSON.parse(json1));

//Promise
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve("COUNT UP!"), ms);
  });
}

sleep(1000)
  .then (function(response){
    console.log(response)
    console.log(1);
    return sleep(1000);
  })
  .then (function(){
    console.log(2);
    return sleep(1000);
  })
  .then (function(){
    console.log(3);
    return sleep(1000);
  })
  .catch (function(err){
    console.log(err);
  })
  .finally (function(){
    console.log("DONE!");
  });



//async await
const executeAsync = async () => {
  try {
    const response = await sleep(1000);
    console.log(response);
    console.log(1);
    await sleep(1000);
    console.log(2);
    await sleep(1000);
    console.log(3);
  }
  catch(err){
    console.log(err);
  }
  finally {
    console.log('DONE!');
  }
};
executeAsync();

//Fetch API
var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
  .then(function(response){
    return response.json(); //JSON -> JS
  })
  .then(function(posts){
    console.log(posts);
  })
  .catch(function(err){
    console.log(err);
  });


//useEffect()
//import {useState, useEffect} from 'react';

function MyApp (){
  const [title, setTitle] = React.useState('');
  const [posts, setPosts] = React.useState([]);
  const [type, setType] = React.useState('posts');

  React.useEffect(() => {
    document.title = title;
    console.log('re-render');
  });

  React.useEffect(() => {
    console.log('useEffect2');
    fetch(postApi)
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, []);

  React.useEffect(() => {
    console.log('useEffect3');
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      })
  }, [type]);

  return (
    <div>
      <button onClick={() => setType('posts')}>posts</button>
      <button onClick={() => setType('albums')}>albums</button>
      <button onClick={() => setType('photos')}>photos</button>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      {console.log('Render')}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
          ))}
      </ul>

    </div>
    )
}

const domContainer = document.getElementById("hehe");
ReactDOM.render(<MyApp />, domContainer);