 // Variables
const show = document.querySelector('#tweet-list');
const storage = [];
// console.log(show.classList)

 // Event Listeners
 eventListeners();

 function eventListeners() {
   // form submission
   document.querySelector('#form').addEventListener('submit', newTweet);

   //remove the element
   show.addEventListener('click', deleteLi)

   //autommatic loading of content from Dom
   document.addEventListener('DOMContentLoaded', loadedStorage)
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

    //displaying on page
    show.appendChild(li)
    
    addTweetStorage(tweet);

    //notification
    alert('Tweet Added')

    return this.reset();
 }

 //deleteLi Functioln
function deleteLi(e) {
    if (e.target.classList.contains('fe-close')) {
        let tweets = getTweetFromStorage()
        
        //remove tweet from the display
        e.target.parentElement.remove();
    }
    
        
    //seleting the element to be deleted
    removeTweetStorage(e.target.parentElement.textContent);
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

function loadedStorage() {
    let tweets = getTweetFromStorage()

    tweets.forEach(tweet => {
        //creating an li
        const li = document.createElement('li');
        li.classList = 'flex';
        li.textContent = tweet;

        //how to remove a btn
        const removeBtn = document.createElement('i');
        removeBtn.classList = 'fe fe-close';
        li.appendChild(removeBtn)

        //displaying on page
        show.appendChild(li)
    });
}

function removeTweetStorage(tweet) {
    
    let tweets = getTweetFromStorage()

    let tweetDel = tweet

    tweets.forEach((tweetLs, index) => {
        if (tweetDel === tweetLs ) {
            // console.log('yes')
            tweets.splice(index, 1)
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets))
}