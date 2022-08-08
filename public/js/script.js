// Declare variables and assign objects from the DOM
//register an event listener on the form object.
//create an async function that create a POST request to the server and handles a response.

// let receivedUsername = document.getElementById("username").value
// let receivedPassword = document.getElementById("password").value
// const loginBtn = document.getElementById("login-btn")
// const spinnyWheelOfDoom = document.getElementById("loader")
// const content = document.getElementById("content")
const form = document.getElementById("login-form")
let payload = new Object
form.addEventListener('submit',onSubmit);


async function onSubmit(e){
  console.log('banana')
console.log(e)
const response = new Promise((resolve,reject) => {
  if (e){
    payload = {
      username: 'testUser',
      password: 'Multiverse!'
    }
    console.log('eggs')
    resolve(fetch('http://localhost:3000', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    }) 
    )
    console.log('pineapple')//know we get this far as everyhting logs so above must be executing
  } else{reject()}
})
console.log('grapes')// this logs too
const data = response.json  // adding parenthesise stops the blow executing but should be fine?
console.log(data)  //logs undefined
console.log('grapefruit')//logs


}
  // payload = {username:'testUser', password: 'Multiverse!'} //replace this with received values afterwards - hard coded to test login

  // const response = fetch('http://localhost:3000', {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'POST',
  //       body: JSON.stringify(payload),
  //     });
  //     console.log(response) //shows promise pending but flicks away too quick to do anything about
  //     const data = await response.json()
  //     console.log(data)
 



