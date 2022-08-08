// // Declare variables and assign objects from the DOM
// //register an event listener on the form object.
// //create an async function that create a POST request to the server and handles a response.


let spinnyWheel = document.getElementById('loader');
let contentText = document.getElementById('content');
let myLogin = document.getElementById('login-form');
let receivedUsername = document.getElementById("username").value
let receivedPassword = document.getElementById("password").value
myLogin.addEventListener('submit', login);

async function login(e) {
  e.preventDefault();
  let payload = {
    // username: receivedUsername,
    // password: receivedPassword
    username: myLogin.elements[0].value,
    password: myLogin.elements[1].value,
  };
  let response = await fetch('http://localhost:3000', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });
  let output = await response.json();
  console.log(output)
  // console.log(await response.json());
  
}