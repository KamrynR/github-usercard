// import axios from 'axios';
// const axios = require('axios');
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function newGitCard (user) {
axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
      newCards.appendChild(cardMaker(response.data.avatar_url, response.data.name, response.data.login, response.data.location, response.data.html_url, response.data.followers, response.data.following, response.data.bio));
      console.log(response.data);
  })
  .catch(error => {
    console.log("Error:" + error);
  });
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
let newCards = document.querySelector('.cards');
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];
console.log(newGitCard("KamrynR"));
followersArray.forEach(x => {
  newGitCard(x);
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(imgURL, realName, userName, userLocation, gitLink, userFollowers, userFollowing, userBio) {
  let card = document.createElement('div');
  let cImg = document.createElement('img');
  let cInfo = document.createElement('div');
  let cName = document.createElement('h3');
  let cUserName = document.createElement('p');
  let cLocation = document.createElement('p');
  let cProfile = document.createElement('p');
  let cGitLink = document.createElement('a');
  let cFollowers = document.createElement('p');
  let cFollowing = document.createElement('p');
  let cBio = document.createElement('p');

  card.appendChild(cImg);
  card.appendChild(cInfo);
  cInfo.appendChild(cName);
  cInfo.appendChild(cUserName);
  cInfo.appendChild(cLocation);
  cInfo.appendChild(cProfile);
  cInfo.appendChild(cFollowers);
  cInfo.appendChild(cFollowing);
  cInfo.appendChild(cBio);

  card.classList.add('card');
  cInfo.classList.add('card-info');
  cName.classList.add('name');
  cUserName.classList.add('username');

  cImg.setAttribute('src', imgURL);
  cGitLink.setAttribute('src', gitLink);

  cName.innerHTML = realName;
  cUserName.innerHTML = "GitHub: " + userName;
  cLocation.innerHTML = "Location: " + userLocation;
  cProfile.innerHTML = "Profile: " + gitLink;
  cFollowers.innerHTML = "Followers: " + userFollowers;
  cFollowing.innerHTML = "Following: " +userFollowing;
  cBio.innerHTML = "Bio: " + userBio;

  return card;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
