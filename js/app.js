 // Variables
const show = document.querySelector('#tweet-list');
const storage = [];




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
   
   //creating an li
   const li = document.createElement('li');
   li.classList = 'flex';
   li.textContent = tweet;

   //how to remove a btn
   const removeBtn = document.createElement('i');
   removeBtn.classList = 'fe fe-close';
   li.appendChild(removeBtn)

   //remove the element
    removeBtn.addEventListener('click', deleteLi)

//    //storing the values
//    storage.push(li);
//    localStorage.setItem(storage)

    //displaying on page
    show.appendChild(li)
    
    addTweetStorage(tweet);
 }

 //deleteLi Functioln
function deleteLi(e) {
    if (e.target.classList.contains('fe-close')) {
        removeBtn.parentElement.remove();
    }
}
 
//adding tweet
function addTweetStorage(tweet) {
    //getting existing data from the storage
    let tweets = getTweetFromStorage();

    //add tweet to the array
    tweets.push(tweet)

    //convert tweet array to string
    localStorage.setItem('tweets', JSON.stringify(tweets))
} 

function getTweetFromStorage() {
    let tweets;
    let stateLs = localStorage.getItem('tweets')

    if (stateLs === null) {
        tweets = []
    } else {
        tweets = JSON.parse(stateLs)
    }
    return tweets;
}