/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
// axios.get('https://api.github.com/users/jimlemoine');
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

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
function userCard({login, avatar_url, html_url, name, location, bio, followers, following}) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const nameOfUser = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const page = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  card.classList.add('card');
  userImg.src = avatar_url;
  cardInfo.classList.add('card-info');
  nameOfUser.classList.add('name');
  nameOfUser.textContent = name;
  userName.classList.add('username');
  userName.textContent = login;
  userLocation.textContent = `Location: ${location}`;
  profile.textContent = `Profile: ${page}`;
  page.href = html_url;
  page.textContent = html_url;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(nameOfUser);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(page);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);
  return card;
}
//STEP 4
const cardsDiv = document.querySelector('.cards');

axios.get(`https://api.github.com/users/jimlemoine`)
    .then(resp => {
      const personCard = userCard(resp.data);
      cardsDiv.appendChild(personCard);
    })
    .catch(err => {
      const errorText = document.createElement('p');
      errorText.textContent = "The API call didn't work";
      document.body.appendChild(errorText);
    })
//STEP 5
for (let i = 0; i < followersArray.length; i++) {
  axios.get(`https://api.github.com/users/${followersArray[i]}`)
    .then(resp => {
      const personCard = userCard(resp.data);
      cardsDiv.appendChild(personCard);
    })
    .catch(err => {
      const errorText = document.createElement('p');
      errorText.textContent = "The API call didn't work";
      document.body.appendChild(errorText);
    })
}

//TESTING
// axios.get('https://api.github.com/users/jimlemoine')
//   .then(resp => console.log(resp.data))
//   .catch(err => console.log(err));
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
