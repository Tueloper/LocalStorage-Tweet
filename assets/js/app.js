 // Variables






 // Event Listeners
eventListeners();

function eventListeners() {
  // form submission
  document.querySelector('#form').addEventListener('submit', newTweet);
}



// Functions

function newTweet(e) {
  e.preventDefault();

  const tweet = document.getElementById('tweet').value;
  console.log(tweet);
}


