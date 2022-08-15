// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', createLikerButton)

const errorMessage = document.querySelector('#modal')

// function makesHiddenStart(){
//   return errorMessage.hidden = true;
// }
// makesHiddenStart()

function createLikerButton(){
  let likerButton = document.querySelectorAll('.like-glyph');
  likerButton.forEach(button => clicker(button));
}

function clicker(button){
  button.addEventListener('click', updateLikeStatus);
}

function updateLikeStatus(e){
  mimicServerCall()
  .then(() => {
  e.target.innerHTML = FULL_HEART
  e.target.classList.toggle('activated-heart')
  })
  .catch(() => {
    errorMessage.toggle('hidden')
    setTimeout(() => errorMessage.toggle('hidden'), 3000)
  });
}

function logger() {console.log('whatever')}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
